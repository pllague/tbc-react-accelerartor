import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function PUT(request: NextRequest) {
  const { prod_id } = await request.json();
  try {
    if (!prod_id) throw new Error("product not found");

    const cart = await sql<CartTable>`SELECT * FROM carts;`;

    if (cart.rows.length) {
      cart.rows.map(async (row) => {
        const products = row.products;
        const index = products.findIndex((item) => item.id === Number(prod_id));
        const path = `{${index}}`;
        if (index !== -1)
          await sql`UPDATE carts SET products = products#-${path}, added_on = NOW() WHERE user_id = ${row.user_id};`;
      });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const carts = await sql`SELECT * FROM carts;`;
  return NextResponse.json({ carts }, { status: 200 });
}
