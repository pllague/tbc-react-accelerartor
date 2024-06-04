import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest) {
    const id = request.nextUrl.pathname.replace('/api/get-users/', '');

  try {
    const user = await sql`SELECT * FROM users WHERE sub = ${id}`;
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}