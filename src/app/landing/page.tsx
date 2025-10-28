"use client";
import { useState } from 'react';

/**
 * Landing page for TradeMind.
 * Provides a brief intro and a form to join the beta waitlist.
 */
export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [loading, setLoading] = useState(false);

  async function joinWaitlist(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'landing' }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background text-textPrimary">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold">Trade smarter. Learn faster.</h1>
        <p className="text-lg text-textSecondary max-w-xl mx-auto">
          TradeMind is an AI‑powered trading companion that helps you track, analyze and improve every trade.
          Join our waitlist to be the first to know when we launch.
        </p>
        <form onSubmit={joinWaitlist} className="flex flex-col md:flex-row justify-center items-center gap-3 mt-4">
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-72 px-4 py-3 rounded-lg bg-card border border-border text-textPrimary"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-accent1/20 hover:bg-accent1/30"
            disabled={loading}
          >
            {loading ? 'Joining…' : 'Join waitlist'}
          </button>
        </form>
        {status === 'success' && <p className="text-green-400">Thanks for joining! We’ll be in touch soon.</p>}
        {status === 'error' && <p className="text-red-400">Something went wrong. Please try again.</p>}
      </div>
    </div>
  );
}