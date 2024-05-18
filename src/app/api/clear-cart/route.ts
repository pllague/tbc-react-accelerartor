import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function PUT(request: NextRequest) {
  const uid = request.cookies.get("uid")?.value;

  try {
    if (!uid) throw new Error("user not found");

    const cart = await sql`SELECT * FROM carts WHERE user_id = ${Number(uid)};`;

    if (cart.rows.length) {
      const products: SelectedProduct[] = [];

      await sql`UPDATE carts SET products = ${JSON.stringify(
        products
      )}, added_on = NOW() WHERE user_id = ${Number(uid)};`;
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const carts = await sql`SELECT * FROM carts;`;
  return NextResponse.json({ carts }, { status: 200 });
}
