import { NextResponse } from "next/server";

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !anonKey) {
    return NextResponse.json(
      { ok: false, error: "Missing env vars SUPABASE_URL or ANON_KEY" },
      { status: 500 }
    );
  }

  const r = await fetch(
    `${supabaseUrl}/rest/v1/tournaments?select=id&limit=1`,
    {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      cache: "no-store",
    }
  );

  const text = await r.text();

  return new NextResponse(text, {
    status: r.status,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
    },
  });
}
