import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const subscribers = await sql`SELECT * FROM subscribers ORDER BY id DESC;`;
    return NextResponse.json({ subscribers }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
