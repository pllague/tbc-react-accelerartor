import { NextRequest, NextResponse } from "next/server";
import { sql } from '@vercel/postgres';


export async function DELETE(_: NextRequest, { params: { id } }: { params: { id: number }}) {
    try {
        if(!id) throw new Error('ID is required');
        await sql`DELETE FROM blogs WHERE id = ${Number(id)};`;
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }

    const blog = await sql`SELECT * FROM blogs;`;
    return NextResponse.json({blog}, {status: 200});
}