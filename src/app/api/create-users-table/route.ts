import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET() {
  try {
    const result =
      await sql`CREATE TABLE users ( id SERIAL, name varchar(255), email varchar(255), age varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }


  // Remove table from DB
  // try {
  //   const result = await sql`DROP TABLE IF EXISTS users;`;
  //   return NextResponse.json({ result }, { status: 200 });
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 });
  // }
}