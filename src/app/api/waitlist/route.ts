import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

/**
 * Waitlist API endpoint. Accepts POST requests with an email
 * and optional source field and inserts into the waitlist table.
 */
export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    }
    const { error } = await supabase.from('waitlist').insert({ email: email.trim(), source: source ?? null });
    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || 'Unexpected error' }, { status: 500 });
  }
}