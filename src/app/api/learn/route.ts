import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

/**
 * Learn API endpoint. Provides educational responses to trading questions.
 */
export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ ok: false, error: 'Missing OPENAI_API_KEY' }, { status: 500 });
    }
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            'You are TradeMind Tutor, an AI trading mentor. Explain trading and investing concepts in simple terms and provide examples. Keep your explanations clear, concise and supportive.',
        },
        { role: 'user', content: String(question) },
      ],
      max_tokens: 384,
      temperature: 0.6,
    });
    const text = response.choices[0]?.message.content?.trim() || 'No response';
    return NextResponse.json({ ok: true, text });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || 'Unexpected error' }, { status: 500 });
  }
}