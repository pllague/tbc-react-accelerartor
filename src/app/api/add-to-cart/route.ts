import { NextRequest, NextResponse } from "next/server";
import { sql } from '@vercel/postgres';
import { createCart } from "../../api";

export async function PUT(request: NextRequest) {

    const uid = request.cookies.get("uid")?.value;
    const { prod_id } = await request.json();

    try {
        if (!prod_id || !uid) throw new Error('product or user not found');

        const cart = await sql<CartTable>`SELECT * FROM carts WHERE user_id = ${Number(uid)};`;

        if (cart.rows.length) {
            let newProduct: ProductObject;
            const products = cart.rows[0].products;
            const index = products.findIndex((item) => item.id === prod_id);

            if (index === -1) {
                newProduct = { id: prod_id, quantity: 1 };
                await sql`UPDATE carts SET products = jsonb_insert(products,'{0}',${JSON.stringify(newProduct)}),added_on = NOW() WHERE user_id = ${Number(uid)};`;
            } else {
                const product = products[index];
                const path = `{${index}}`;
                newProduct = { ...product, quantity: product.quantity + 1 };
                await sql`UPDATE carts SET products = jsonb_set(products,${path},${JSON.stringify(newProduct)}),added_on = NOW() WHERE user_id = ${Number(uid)};`;
            }
        } else {
            createCart(Number(uid), prod_id);
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
    const carts = await sql`SELECT * FROM carts;`;
    return NextResponse.json({ carts }, { status: 200 });
}