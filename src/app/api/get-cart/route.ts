import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const uid = request.cookies.get("uid")?.value;
  try {
    const cart = await sql`SELECT * FROM carts WHERE user_id = ${Number(uid)};`;

    return NextResponse.json({ cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}