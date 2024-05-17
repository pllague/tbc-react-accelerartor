import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const user_id = request.cookies.get("uid")?.value;

    const { item_id } = await request.json();
    const item = JSON.stringify([{ id: item_id, quantity: 1 }])

    if (!user_id || !item_id) throw new Error('user_id and products fields required');

    await sql`INSERT INTO carts (user_id, products) VALUES (${+user_id}, ${item});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM carts;`;
  return NextResponse.json({ users }, { status: 200 });
}