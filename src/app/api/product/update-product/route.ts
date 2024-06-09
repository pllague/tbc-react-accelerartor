import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
      const { id, title, description ,price, img_url, brand, category } = await request.json();
      if ( !title || !description || !price || !img_url || !brand || !category ) throw new Error('Title, Description ,Price, Image, Brand and Category are required');
      if (!id ) {
        throw new Error('Product not found');
      }
      await sql`UPDATE products SET title = ${title}, description = ${description}, price = ${price}, image = ${img_url}, brand = ${brand}, category = ${category} WHERE id = ${Number(id)};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const products = await sql`SELECT * FROM products;`;
    return NextResponse.json({ products }, { status: 200 });
}