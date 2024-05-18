import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function PUT(request: NextRequest) {
  const uid = request.cookies.get("uid")?.value;
  const { prod_id } = await request.json();

  try {
    if (!prod_id || !uid) throw new Error("product or user not found");

    const cart = await sql<CartTable>`SELECT * FROM carts WHERE user_id = ${Number(uid)};`;

    if (cart.rows.length) {
      const products = cart.rows[0].products;

      const index = products.findIndex((item) => item.id === prod_id);
      const product = products[index];
      const path = `{${index}}`;

      if (product.quantity <= 1) {
        await sql`UPDATE carts SET products = products#-${path}, added_on = NOW() WHERE user_id = ${Number(uid)};`;
      } else {
        const newProduct = { ...product, quantity: product.quantity - 1 };
        await sql`UPDATE carts SET products = jsonb_set(products,${path},${JSON.stringify(newProduct)}), added_on = NOW() WHERE user_id = ${Number(uid)};`;
      }

    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const carts = await sql`SELECT * FROM carts;`;
  return NextResponse.json({ carts }, { status: 200 });
}
