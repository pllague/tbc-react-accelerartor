import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  const { id, name, email, age }  = await request.json();

  try {
    if ( !name || !email || !age ) throw new Error('Name, Email, and Age are required');
    
    if (!id ) {
      throw new Error('User not found');
    }

    await sql`UPDATE users SET name = ${name}, email = ${email}, age = ${age} WHERE id = ${Number(id)};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}
