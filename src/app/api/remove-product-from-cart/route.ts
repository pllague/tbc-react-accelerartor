import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function PUT(request: NextRequest) {
  const uid = request.cookies.get("uid")?.value;
  const { prod_id } = await request.json();

  try {
    if (!prod_id || !uid) throw new Error("product or user not found");

    const cart = await sql`SELECT * FROM carts WHERE user_id = ${Number(uid)};`;

    if (cart.rows.length) {
      const products = cart.rows[0].products;

      const newProduct = products.filter(
        (prod: ProductObject) => prod.id !== prod_id
      );

      await sql`UPDATE carts SET products = ${JSON.stringify(
        newProduct
      )}, added_on = NOW() WHERE user_id = ${Number(uid)};`;
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const carts = await sql`SELECT * FROM carts;`;
  return NextResponse.json({ carts }, { status: 200 });
}
