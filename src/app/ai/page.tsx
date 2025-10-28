"use client";
import { useState } from 'react';

export default function AIPage() {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function askAI(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setAnswer(null);
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data.ok) setAnswer(data.text);
      else alert(data.error || 'An error occurred');
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl">Ask TradeMind</h1>
      <form onSubmit={askAI} className="flex gap-3">
        <input
          className="flex-1 rounded-lg bg-background border border-border p-3"
          placeholder="Ask anything: e.g., Review my TSLA trade: buy 5 @ 210"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className="px-4 py-2 rounded-lg bg-accent1/20 hover:bg-accent1/30" type="submit">
          {loading ? 'Thinking…' : 'Ask'}
        </button>
      </form>
      {answer && (
        <div className="rounded-2xl border border-border p-4 bg-card whitespace-pre-wrap">
          {answer}
        </div>
      )}
    </main>
  );
}