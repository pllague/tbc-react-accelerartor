import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  _: NextRequest,
  { params: { sub } }: { params: { sub: string } }
) {
  try {
    const userImage = await sql`SELECT image_url FROM users WHERE sub = ${sub}`;
    return NextResponse.json({ userImage }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
