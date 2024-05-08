import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const revalidate = 0;

export async function PUT(request: Request) {
  const { id, name, email, age }  = await request.json();

  try {
    if (!id || !name || !email || !age) throw new Error('ID, name, email, and age are required');
    
    // Check if the user with the provided ID exists
    const existingUser = await sql`SELECT * FROM users WHERE id = ${id};`;
    if (!existingUser ) {
      throw new Error('User not found');
    }

    // Update the user's information
    await sql`UPDATE users SET name = ${name}, email = ${email}, age = ${age} WHERE id = ${id};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}
