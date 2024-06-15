import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { deleteProductFromCartAction } from "../../../../actions";

export async function DELETE(
  _: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  try {
    if (!id) throw new Error("ID is required");

    await sql`DELETE FROM products WHERE id = ${Number(id)};`;
    // Delete related reviews and ratings
    await sql`DELETE FROM reviews WHERE product_id = ${id};`;
    await sql`DELETE FROM ratings WHERE product_id = ${id};`;

    // Remove product from the carts table
    await deleteProductFromCartAction(id);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await sql`SELECT * FROM products;`;
  return NextResponse.json({ products }, { status: 200 });
}
