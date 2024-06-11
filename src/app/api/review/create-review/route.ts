import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { userId, userName, productId, review, rating } =
      await request.json();
    const item = JSON.stringify([{ userId, userName, review, rating }]);

    if (!userId || !productId || !review)
      throw new Error("user Id, product Id and review fields are required");

    await sql`INSERT INTO reviews (product_id, review) VALUES (${productId}, ${item});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const reviews = await sql`SELECT * FROM reviews;`;
  return NextResponse.json({ reviews }, { status: 200 });
}
