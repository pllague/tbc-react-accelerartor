import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 0;

export async function GET(_: NextRequest, { params: { id } }: { params: { id: number }}) {

  try {
    if (!id ) {
      throw new Error('Product not found');
    }
    const products = await sql`SELECT * FROM products WHERE id = ${Number(id)}`;
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}



