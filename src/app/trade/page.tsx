"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Side = "buy" | "sell";

export default function AddTradePage() {
  const router = useRouter();
  const [symbol, setSymbol] = useState("");
  const [side, setSide] = useState<Side>("buy");
  const [qty, setQty] = useState<number>(0);
  const [entry, setEntry] = useState<number>(0);
  const [exit, setExit] = useState<number>(0);
  const [stop, setStop] = useState<number | "">("");
  const [tp, setTp] = useState<number | "">("");
  const [thesis, setThesis] = useState("");

  function pct(entry: number, exit: number, side: Side) {
    if (!entry || !exit) return null;
    const diff = side === "buy" ? exit - entry : entry - exit;
    return Number(((diff / entry) * 100).toFixed(2));
  }

  async function addTrade(e: React.FormEvent) {
    e.preventDefault();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return alert("Not signed in");

    const result_pct = exit ? pct(entry, exit, side) : null;

    const { error } = await supabase.from("trades").insert({
      user_id: user.id,
      symbol: symbol.toUpperCase(),
      side,
      qty,
      entry_price: entry,
      exit_price: exit || null,
      stop_loss: stop === "" ? null : Number(stop),
      take_profit: tp === "" ? null : Number(tp),
      thesis,
      result_pct,
    });

    if (error) alert(error.message);
    else {
      alert("Trade saved");
      router.push("/");
    }
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl mb-4 font-semibold">Add Trade</h1>
      <form
        onSubmit={addTrade}
        className="space-y-3 bg-[#0E1218] p-4 rounded-2xl border border-[#1A1F2B]"
      >
        <input
          className="w-full rounded-lg bg-[#0B0E13] border border-[#1A1F2B] p-3"
          placeholder="Symbol (e.g., TSLA)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <div className="flex gap-3">
          <select
            className="rounded-lg bg-[#0B0E13] border border-[#1A1F2B] p-3"
            value={side}
            onChange={(e) => setSide(e.target.value as Side)}
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
          <input
            type="number"
            className="flex-1 rounded-lg bg-[#0B0E13] border border-[#1A1F2B] p-3"
            placeholder="Qty"
            value={qty}
            onChange={(e) => setQty(+e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            className="w-1/2 rounded-lg bg-[#0B0E13] border border-[#1A1F2B] p-3"
            placeholder="Entry Price"
            value={entry}
            onChange={(e) => setEntry(+e.target.value)}
          />
          <input
            type="number"
            className="w-1/2 rounded-lg bg-[#0B0E13] border border-[#1A1F2B] p-3"
            placeholder="Exit Price (optional)"
            value={exit || ""}
            onChange={(e) => setExit(e.target.value === "" ? 0 : +e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <input
            type="number"
            className="w-1/2 rounded-lg bg-[#0B0E13] border border-[#1A1F2B] p-3"
            placeholder="Stop Loss (optional)"
            value={stop}
            onChange={(e) => setStop(e.target.value === "" ? "" : +e.target.value)}
          />
          <input
            type="number"
            className="w-1/2 rounded-lg bg-[#0B0E13] border border-[#1A1F2B] p-3"
            placeholder="Take Profit (optional)"
            value={tp}
            onChange={(e) => setTp(e.target.value === "" ? "" : +e.target.value)}
          />
        </div>

        <textarea
          className="w-full rounded-lg bg-[#0B0E13] border border-[#1A1F2B] p-3"
          rows={4}
          placeholder="Thesis (why you took the trade)"
          value={thesis}
          onChange={(e) => setThesis(e.target.value)}
        />

        <div className="text-[#A1A8B5]">
          {exit ? (
            <>Projected P&L: <span className="text-textPrimary">{(pct(entry, exit, side) ?? 0)}%</span></>
          ) : (
            <>Add an Exit Price to see projected P&L.</>
          )}
        </div>

        <button className="px-4 py-2 rounded-lg bg-accent1/20 hover:bg-accent1/30">
          Save Trade
        </button>
      </form>
    </main>
  );
}
