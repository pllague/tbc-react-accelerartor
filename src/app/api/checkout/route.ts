import { NextRequest, NextResponse } from "next/server";
import { createToken } from "../../../helpers";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (p: StripeData) => p.active === true
  );

  return availableProducts;
};

export async function POST(req: NextRequest) {
  const { products, profile } = await req.json();

  let activeProducts = await getActiveProducts();

  try {
    for (const product of products) {
      const stripeProduct = activeProducts?.find(
        (stripeP: StripeData) =>
          stripeP?.name?.toLowerCase() === product.title.toLowerCase() &&
          stripeP?.metadata?.price === product.price
      );
      if (stripeProduct == undefined) {
        await stripe.products.create({
          name: product.title,
          images: [product.image],
          default_price_data: {
            unit_amount: product.price * 100,
            currency: "usd",
          },
          metadata: {
            price: product.price,
          },
        });
      }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

  activeProducts = await getActiveProducts();
  let stripeItems: StripeData[] = [];

  for (const product of products) {
    const stripeProduct = activeProducts?.find(
      (prod: StripeData) =>
        prod?.name?.toLowerCase() === product.title.toLowerCase() &&
        prod?.metadata?.price === product.price
    );

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
      });
    }
  }

  // Generate a token
  const token = await createToken({
    id: profile.sub,
  });

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    payment_intent_data: {
      metadata: {
        id: profile.sub,
        phone: profile.phone,
        city: profile.city,
        address: profile.address,
      },
    },
    success_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/orders/success?token=${token}`,
    cancel_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/orders/cancel?token=${token}`,
  });

  return NextResponse.json({ url: session.url });
}
