import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, mobile, comment } =
      await request.json();
    await sql`INSERT INTO contacts (firstname, lastname, email, mobile, comment) VALUES ( ${firstName}, ${lastName}, ${email}, ${mobile}, ${comment});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const contacts = await sql`SELECT * FROM contacts;`;
  return NextResponse.json({ contacts }, { status: 200 });
}
