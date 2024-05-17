import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';
import { createCart } from '../../api';

export async function PUT(request: NextRequest) {

  try {
    const user_id = request.cookies.get("uid")?.value;
    const { item_id } = await request.json();

    if (!item_id || !user_id) throw new Error('item_id and user_id are required');

    const cart = await sql<CartTable>`SELECT * FROM carts WHERE user_id = ${+user_id};`;

    if (cart.rows.length) {
      let newProduct;
      const products = cart.rows[0].products;
      const isPresent = products.find((item) => item.id === item_id);

      if (!isPresent) newProduct = [...products, { id: item_id, quantity: 1 }];

      if (isPresent) newProduct = products.map((item) => item.id === item_id ? ({ ...item, quantity: item.quantity + 1 }) : ({ ...item }));

      await sql`UPDATE carts SET products = ${JSON.stringify(newProduct)} WHERE user_id = ${+user_id};`;

    } else {
      await createCart(item_id, user_id); // first addition to cart from user should create a cart for him
    }

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const carts = await sql`SELECT * FROM carts;`;
  return NextResponse.json({ carts }, { status: 200 });
}