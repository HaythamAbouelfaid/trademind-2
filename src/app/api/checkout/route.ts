// src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("Missing STRIPE_SECRET_KEY");
  return new Stripe(key);
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const { success_url, cancel_url } = await req.json();

    // Fetch the price via lookup key (safer than hardcoding an ID)
    const prices = await stripe.prices.list({
      lookup_keys: ["trademind_pro_monthly"],
      expand: ["data.product"],
      limit: 1,
    });
    const price = prices.data[0];
    if (!price) throw new Error("Price with lookup_key=trademind_pro_monthly not found");

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: price.id, quantity: 1 }],
      success_url,
      cancel_url,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ ok: true, url: session.url });
  } catch (e: any) {
    console.error("[checkout] error:", e);
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
