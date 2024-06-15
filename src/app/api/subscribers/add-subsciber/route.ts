import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    await sql`INSERT INTO subscribers (email) VALUES (${email});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const subscribers = await sql`SELECT * FROM subscribers;`;
  return NextResponse.json({ subscribers }, { status: 200 });
}
