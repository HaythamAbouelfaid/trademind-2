"use client";

export default function PricingPage() {
  async function goPro() {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        success_url: `${window.location.origin}/?upgrade=success`,
        cancel_url: `${window.location.origin}/pricing`,
      }),
    });
    const data = await res.json();
    if (!data.ok) return alert(data.error || "Checkout error");
    window.location.href = data.url;
  }

  return (
    <main className="min-h-screen bg-background text-textPrimary p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Pricing</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#1A1F2B] p-6 bg-[#0E1218]">
            <h2 className="text-xl font-semibold mb-2">Free</h2>
            <p className="text-[#A1A8B5] mb-3">AI chat (basic), manual trade logging.</p>
            <p className="text-2xl font-bold mb-4">$0</p>
          </div>

          <div className="rounded-2xl border border-accent1/40 p-6 bg-[#0E1218] shadow-[0_0_24px_rgba(0,224,255,0.15)]">
            <h2 className="text-xl font-semibold mb-2">Pro</h2>
            <p className="text-[#A1A8B5] mb-3">Advanced insights, exports, priority access.</p>
            <p className="text-2xl font-bold mb-4">$4.99/mo</p>
            <button onClick={goPro} className="px-4 py-2 rounded-lg bg-accent1/20 hover:bg-accent1/30">
              Go Pro
            </button>
          </div>

          <div className="rounded-2xl border border-[#1A1F2B] p-6 bg-[#0E1218]">
            <h2 className="text-xl font-semibold mb-2">Premium</h2>
            <p className="text-[#A1A8B5] mb-3">Coming soon: broker sync + alerts.</p>
            <p className="text-2xl font-bold mb-4">$9.99/mo</p>
          </div>
        </div>
      </div>
    </main>
  );
}
