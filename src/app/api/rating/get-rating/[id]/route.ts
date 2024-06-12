import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;
export async function GET(
  _: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  try {
    const ratings = await sql`SELECT * FROM ratings WHERE product_id = ${Number(
      id
    )}`;
    return NextResponse.json({ ratings }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
