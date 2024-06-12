import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { createRating } from "../../../api";

export async function PUT(request: NextRequest) {
  const { userId, productId, rating } = await request.json();
  try {
    if (!userId || !productId || !rating)
      throw new Error("userId, review or rating not found");

    const allRatings =
      await sql<RatingTable>`SELECT * FROM ratings WHERE product_id = ${+productId};`;

    if (allRatings.rows.length) {
      let newRating: RatingObject;
      const ratings = allRatings.rows[0].rating;
      const index = ratings.findIndex((item) => item.userId === userId);

      if (index === -1) {
        newRating = { userId: userId, rating: rating };
        await sql`UPDATE ratings SET rating = jsonb_insert(rating,'{0}',${JSON.stringify(
          newRating
        )}) WHERE product_id = ${+productId};`;
      } else {
        const existingRating = ratings[index];
        const path = `{${index}}`;
        newRating = { ...existingRating, rating: rating };
        await sql`UPDATE ratings SET rating = jsonb_set(rating,${path},${JSON.stringify(
          newRating
        )}) WHERE product_id = ${+productId};`;
      }
    } else {
      createRating(rating, userId, productId);
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const ratings = await sql`SELECT * FROM ratings;`;
  return NextResponse.json({ ratings }, { status: 200 });
}
