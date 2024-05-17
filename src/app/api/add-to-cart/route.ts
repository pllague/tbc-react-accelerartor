import { NextRequest, NextResponse } from "next/server";
import { sql } from '@vercel/postgres';
import { createCart } from "../../api";

export async function PUT (request: NextRequest){

    const uid = request.cookies.get("uid")?.value;
    const {prod_id} = await request.json();

    try {
        if (!prod_id || !uid) throw new Error('product or user not found');

        const cart = await sql`SELECT * FROM carts WHERE user_id = ${Number(uid)};`;

        if (cart.rows.length){
            const products = cart.rows[0].products;
            const exists = products.find((prod: ProductObject) => prod.id === prod_id);

            if (!exists){ 
                const newProduct = [...products, { id: prod_id, quantity: 1 }];
                await sql`UPDATE carts SET products = ${JSON.stringify(newProduct)}, added_on = NOW() WHERE user_id = ${Number(uid)};`;
            } else {
                const newProduct = products.map((prod: ProductObject) => prod.id === prod_id ? ({...prod, quantity: prod.quantity + 1}) : ({...prod }));
                await sql`UPDATE carts SET products = ${JSON.stringify(newProduct)}, added_on = NOW() WHERE user_id = ${Number(uid)};`;
            }
        } else {
            createCart(Number(uid), prod_id);
        }
    } catch(error) {
        return NextResponse.json({ error }, { status: 500 });
    }
    const carts = await sql `SELECT * FROM carts;`;
    return NextResponse.json({ carts }, { status: 200 });
}