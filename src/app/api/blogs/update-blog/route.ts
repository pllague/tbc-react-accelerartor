import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
      const { id, author, title, description, img_url} = await request.json();
      if ( !title || !description || !img_url ) throw new Error('Title, Description and Image are required');
      if (!id ) {
        throw new Error('Product not found');
      }
      await sql`UPDATE blogs SET author = ${author}, title = ${title}, description = ${description}, date = NOW(), image = ${img_url} WHERE id = ${Number(id)};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const blog = await sql`SELECT * FROM blogs;`;
    return NextResponse.json({ blog }, { status: 200 });
}