"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

function inferTopic(text: string): string {
  const t = text.toLowerCase();
  if (t.includes("rsi")) return "RSI";
  if (t.includes("moving average") || t.includes("ma") || t.includes("sma") || t.includes("ema")) return "Moving Average";
  if (t.includes("risk") || t.includes("stop")) return "Risk";
  if (t.includes("candlestick")) return "Candlestick";
  return "General";
}

export default function LearnPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function ask(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setAnswer(null);

    try {
      const res = await fetch("/api/learn", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Error");
      setAnswer(data.text);

      // log analytics
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from("learn_events").insert({
          user_id: user.id,
          topic: inferTopic(question),
          question,
        });
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Learn</h1>
      <form onSubmit={ask} className="flex gap-3">
        <input
          className="flex-1 rounded-lg bg-[#0B0E13] border border-[#1A1F2B] p-3"
          placeholder="Ask a concept (e.g., Explain RSI vs. EMA)"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button className="px-4 py-2 rounded-lg bg-accent1/20 hover:bg-accent1/30" disabled={loading}>
          {loading ? "Teaching..." : "Ask"}
        </button>
      </form>

      {answer && (
        <div className="rounded-2xl border border-[#1A1F2B] p-4 bg-[#0E1218] whitespace-pre-wrap">{answer}</div>
      )}
    </main>
  );
}
