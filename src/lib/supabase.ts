import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Debug: show the raw values and lengths
console.log('🔎 SUPABASE URL raw:', JSON.stringify(url));
console.log('🔎 SUPABASE ANON length:', anon?.length);

function ensure(cond: any, msg: string): asserts cond {
  if (!cond) throw new Error(msg);
}

ensure(url, 'ENV MISSING: NEXT_PUBLIC_SUPABASE_URL is empty');
ensure(/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/.test(url!), `ENV FORMAT: URL must look like https://xxxxx.supabase.co — got ${JSON.stringify(url)}`);
ensure(anon, 'ENV MISSING: NEXT_PUBLIC_SUPABASE_ANON_KEY is empty');

export const supabase = createClient(url!, anon!, {
  auth: { persistSession: true, autoRefreshToken: true },
});
