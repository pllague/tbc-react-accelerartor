import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
      const { author, title, description, img_url } = await request.json();
      if ( !title || !description ) throw new Error('Title and Description are required');
      await sql`INSERT INTO blogs (author, title, description, image) VALUES (${author}, ${title}, ${description}, ${img_url});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const blog = await sql`SELECT * FROM blogs;`;
    return NextResponse.json({ blog }, { status: 200 });
}