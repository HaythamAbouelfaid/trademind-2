import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { ok: false, error: 'Missing OPENAI_API_KEY' },
        { status: 500 },
      );
    }
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    // Compose a simple system prompt. Adjust as necessary for production.
    const response = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            'You are TradeMind, an AI trading coach. Give concise, tactical advice about trades. Do not trade for the user. Always emphasise learning and risk management.',
        },
        { role: 'user', content: String(prompt) },
      ],
      max_tokens: 256,
      temperature: 0.7,
    });
    const text = response.choices[0]?.message.content?.trim() || 'No response';
    return NextResponse.json({ ok: true, text });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error?.message ?? String(error) },
      { status: 500 },
    );
  }
}