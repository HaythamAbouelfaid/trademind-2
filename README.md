# TradeMind

This repository contains a **starter template** for the TradeMind project.  
It uses Next.js 13 with the App Router, Tailwind CSS for styling, and Supabase for authentication and data persistence.  

The goal of this scaffold is to give you a running start when building the first version of your AI‑powered trading companion.  
It includes a minimal dashboard page, a form to record trades, a simple AI chat page with a stubbed API route that calls OpenAI, and a Supabase client configuration.  

## Getting Started

To run the project locally:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the `.env.example` file to `.env.local` and fill in your Supabase URL, Supabase anon key and an OpenAI API key.
   ```bash
   cp .env.example .env.local
   # then edit .env.local accordingly
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser and log in or sign up with email/password.  

### Additional Pages

The scaffold includes extra pages beyond the core dashboard:

- **/landing** – a simple marketing landing page with a hero section and a waitlist form. Visitors can leave their email to join the beta waitlist.  
- **/learn** – an AI‑powered learning mode where users can ask about trading concepts and get explanations.  
- **/pricing** – a placeholder pricing page ready for Stripe subscription integration.  

### Waitlist API and Table

An API route (`/api/waitlist`) is provided to collect emails from your landing page and insert them into a `waitlist` table in Supabase.  
You'll need to create the table with the following SQL:

```sql
create table if not exists public.waitlist (
  id bigint generated always as identity primary key,
  email text not null unique,
  source text,
  created_at timestamptz default now()
);

alter table public.waitlist enable row level security;
create policy "waitlist_public_insert" on public.waitlist
  for insert with check (true);
create policy "waitlist_select_anonymous" on public.waitlist
  for select using (true);
```

The waitlist form on the landing page sends a POST request to `/api/waitlist` with `email` and an optional `source` (e.g. `landing`).  
You can export the emails from the `waitlist` table to contact users when your beta is ready.

## Project Structure

```
trademind/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout applied to every page
│   │   ├── page.tsx          # Dashboard/homepage
│   │   ├── trade/
│   │   │   └── page.tsx      # Add trade form
│   │   ├── ai/
│   │   │   └── page.tsx      # AI chat interface
│   │   └── api/
│   │       └── analyze/
│   │           └── route.ts   # API route stub for AI analysis
│   ├── lib/
│   │   └── supabase.ts       # Supabase client helper
│   └── styles/
│       └── globals.css       # Global Tailwind base styles
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Supabase Schema

The following SQL can be executed in the Supabase SQL editor to create the necessary tables for this project.  
It creates a `profiles` table tied to the `auth.users` table, a `trades` table to store user trade entries, and an `insights` table to store AI feedback.  
Row level security (RLS) is enabled on each table so that users can only access their own records.

```sql
-- Profiles (1:1 with auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  full_name text,
  avatar_url text,
  created_at timestamptz default now()
);

-- Auto-create profile on new user
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id) values (new.id) on conflict do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- Trades
create type trade_side as enum ('buy','sell');

create table if not exists public.trades (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  symbol text not null,
  side trade_side not null,
  qty numeric(12,4) not null check (qty > 0),
  entry_price numeric(12,4) not null check (entry_price > 0),
  exit_price numeric(12,4),
  stop_loss numeric(12,4),
  take_profit numeric(12,4),
  thesis text,
  result_pct numeric(6,2),
  created_at timestamptz default now()
);

-- AI Insights per trade
create table if not exists public.insights (
  id bigint generated always as identity primary key,
  trade_id bigint not null references public.trades(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  model text default 'gpt-4o',
  content text not null,
  created_at timestamptz default now()
);

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.trades enable row level security;
alter table public.insights enable row level security;

-- Policies: users see/manage only their own rows
create policy "profiles_select_own"
on public.profiles for select using (auth.uid() = id);
create policy "profiles_update_own"
on public.profiles for update using (auth.uid() = id);

create policy "trades_select_own"
on public.trades for select using (auth.uid() = user_id);
create policy "trades_insert_own"
on public.trades for insert with check (auth.uid() = user_id);
create policy "trades_update_own"
on public.trades for update using (auth.uid() = user_id);
create policy "trades_delete_own"
on public.trades for delete using (auth.uid() = user_id);

create policy "insights_select_own"
on public.insights for select using (auth.uid() = user_id);
create policy "insights_insert_own"
on public.insights for insert with check (auth.uid() = user_id);
```

## Notion Workspace Template

You can set up a Notion workspace called **TradeMind HQ** with the following pages and properties:

- **Roadmap (Kanban)**: Use a board view. Properties: `Status` (To‑Do, In‑Progress, Blocked, Done), `Priority` (P0, P1, P2), `Owner`, `ETA`, `Notes`.
- **Tasks (Table)**: Properties: `Status`, `Priority`, `Assignee`, `Area` (Build, Design, Marketing), `Linked Roadmap` (relation).
- **Bugs (Table)**: Properties: `Severity` (High, Medium, Low), `Status`, `Steps to reproduce`, `Build#`.
- **Feature Ideas (Board)**: Properties: `Impact`, `Effort`, `Tag` (AI, UX, Core, Marketing), `Notes`.
- **Beta Waitlist (Table)**: Properties: `Name`, `Email`, `Source` (IG, TikTok, LinkedIn, etc.), `Invited?` (checkbox), `Notes`.

Create additional top‑level checklists for your daily build tasks and goals.  
You can also import the SQL schema above and the `src/` folder into your development environment to bootstrap the next phases of the project.
# trademind-2
