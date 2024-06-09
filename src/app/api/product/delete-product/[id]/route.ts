import { NextRequest, NextResponse } from "next/server";
import { sql } from '@vercel/postgres';


export async function DELETE(_: NextRequest, { params: { id } }: { params: { id: number }}) {
    try {
        if(!id) throw new Error('ID is required');

        await sql`DELETE FROM products WHERE id = ${Number(id)};`;
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }

    const products = await sql`SELECT * FROM products;`;
    return NextResponse.json({products}, {status: 200});
}