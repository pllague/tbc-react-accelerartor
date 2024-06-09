import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
      const { title, description ,price, img_url, brand, category } = await request.json();
      await sql`INSERT INTO products (title, description, price, image, brand, category) VALUES ( ${title}, ${description}, ${price}, ${img_url}, ${brand}, ${category});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const products = await sql`SELECT * FROM products;`;
    return NextResponse.json({ products }, { status: 200 });
}