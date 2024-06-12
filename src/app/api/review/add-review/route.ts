import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { createReview } from "../../../api";

export async function PUT(request: NextRequest) {
  const { userId, productId, userName, review } = await request.json();
  try {
    if (!userId || !productId || !review)
      throw new Error("userId, review or productId not found");

    const allReviews =
      await sql<ReviewsTable>`SELECT * FROM reviews WHERE product_id = ${+productId};`;

    if (allReviews.rows.length) {
      const currentReviews = allReviews.rows[0].review;
      const newReview = { userId, userName, review };

      const updatedReviews = [...currentReviews, newReview];

      const newReviewJson = JSON.stringify(updatedReviews);

      // Update the reviews column
      await sql`UPDATE reviews  SET review = ${newReviewJson}, added_on = NOW() 
            WHERE product_id = ${productId};`;
    } else {
      createReview(userId, userName, productId, review);
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const reviews = await sql`SELECT * FROM reviews;`;
  return NextResponse.json({ reviews }, { status: 200 });
}
