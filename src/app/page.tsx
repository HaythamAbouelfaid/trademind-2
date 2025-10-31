"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import dynamic from 'next/dynamic';
const EquityChart = dynamic(() => import('../components/EquityChart'), { ssr: false });



export default function Dashboard() {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Dashboard data
  const [trades, setTrades] = useState<any[]>([]);
  const [insights, setInsights] = useState<any[]>([]);
  const [equityCurve, setEquityCurve] = useState<
    { index: number; cumulative: number }[]
  >([]);
  const [stats, setStats] = useState<{
    totalProfit: number;
    tradesCount: number;
    streak: number;
  }>({ totalProfit: 0, tradesCount: 0, streak: 0 });

  useEffect(() => {
    // Subscribe to auth state and fetch session
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, sess) => setSession(sess)
    );
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!session) return;

    async function fetchData() {
      const { data: tradesData } = await supabase
        .from("trades")
        .select("*")
        .order("created_at", { ascending: true });

      const { data: insightsData } = await supabase
        .from("insights")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

      setTrades(tradesData || []);
      setInsights(insightsData || []);

      // Compute equity curve and stats
      let cumulative = 0;
      const curve: { index: number; cumulative: number }[] = [];
      let totalProfit = 0;

      tradesData?.forEach((trade, idx) => {
        const qty = Number(trade.qty) || 0;
        const entry = Number(trade.entry_price) || 0;
        const exit = Number(trade.exit_price) || entry;
        const profit = (exit - entry) * qty;
        cumulative += profit;
        totalProfit += profit;
        curve.push({ index: idx + 1, cumulative });
      });

      // Compute streak (consecutive trading days)
      let streak = 0;
      if (tradesData && tradesData.length > 0) {
        const today = new Date();
        const normalize = (d: Date) =>
          new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();

        const tradeDates = tradesData.map((t: any) =>
          normalize(new Date(t.created_at))
        );

        const uniqueDates = Array.from(new Set(tradeDates)).sort((a, b) => b - a);
        let currentDate = normalize(today);
        for (const date of uniqueDates) {
          if (date === currentDate) {
            streak++;
            currentDate = currentDate - 24 * 3600 * 1000;
          } else {
            break;
          }
        }
      }

      setEquityCurve(curve);
      setStats({
        totalProfit,
        tradesCount: tradesData?.length || 0,
        streak,
      });
    }

    fetchData();
  }, [session]);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert("Check your email to confirm your account.");
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4">
        <form
          onSubmit={handleSignIn}
          className="w-full max-w-md space-y-4 bg-card p-6 rounded-2xl border border-border"
        >
          <h1 className="text-2xl font-semibold">TradeMind — Sign in</h1>
          <input
            className="w-full rounded-lg bg-background border border-border p-3 text-textPrimary"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-lg bg-background border border-border p-3 text-textPrimary"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-3">
            <button
              className="px-4 py-2 rounded-lg bg-accent1/20 hover:bg-accent1/30"
              type="submit"
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={handleSignUp}
              className="px-4 py-2 rounded-lg border border-accent2/40 hover:bg-accent2/10"
            >
              Create account
            </button>
          </div>
        </form>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-6xl mx-auto space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">TradeMind</h1>
        <div className="flex items-center gap-3">
          <Link
            href="/trade"
            className="px-3 py-2 rounded-lg bg-accent1/20 hover:bg-accent1/30"
          >
            Add Trade
          </Link>
          <Link
            href="/ai"
            className="px-3 py-2 rounded-lg border border-accent2/40 hover:bg-accent2/10"
          >
            Ask AI
          </Link>
          <Link
            href="/learn"
            className="px-3 py-2 rounded-lg border border-accent2/40 hover:bg-accent2/10"
          >
            Learn
          </Link>
          <Link
            href="/pricing"
            className="px-3 py-2 rounded-lg border border-accent2/40 hover:bg-accent2/10"
          >
            Pricing
          </Link>
          <button
            onClick={handleSignOut}
            className="px-3 py-2 rounded-lg border border-border hover:bg-[#111622]"
          >
            Sign out
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left two-thirds: Chart and stats */}
        <div className="rounded-2xl border border-border p-4 bg-card md:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold">Portfolio Performance</h2>

          <div className="w-full h-64">
            {equityCurve.length > 0 ? (
              <EquityChart data={equityCurve} />
            ) : (
              <div className="h-full flex items-center justify-center text-textSecondary">
                Add trades to view your performance.
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-background border border-border rounded-xl p-4 text-center">
              <p className="text-sm text-textSecondary">Total Profit</p>
              <p className="text-xl font-bold">
                ${stats.totalProfit.toFixed(2)}
              </p>
            </div>
            <div className="bg-background border border-border rounded-xl p-4 text-center">
              <p className="text-sm text-textSecondary">Trades</p>
              <p className="text-xl font-bold">{stats.tradesCount}</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-4 text-center">
              <p className="text-sm text-textSecondary">Streak</p>
              <p className="text-xl font-bold">{stats.streak}d</p>
            </div>
          </div>
        </div>

        {/* Right third: AI Insights */}
        <div className="rounded-2xl border border-border p-4 bg-card space-y-4">
          <h2 className="text-lg font-semibold">Recent AI Insights</h2>
          {insights.length > 0 ? (
            <ul className="space-y-3">
              {insights.map((insight: any) => (
                <li
                  key={insight.id}
                  className="bg-background border border-border rounded-xl p-3 text-sm text-textSecondary"
                >
                  {insight.content?.substring(0, 140)}
                  {insight.content?.length > 140 ? "…" : ""}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-textSecondary">
              No insights yet. Ask AI about a trade.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
