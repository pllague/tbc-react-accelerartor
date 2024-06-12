import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { userId, productId, rating } = await request.json();
    const item = JSON.stringify([{ userId, rating }]);

    if (!userId || !productId || !rating)
      throw new Error("user Id, product Id and ating fields are required");

    await sql`INSERT INTO ratings (product_id, rating) VALUES (${productId}, ${item});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const ratings = await sql`SELECT * FROM ratings;`;
  return NextResponse.json({ ratings }, { status: 200 });
}
