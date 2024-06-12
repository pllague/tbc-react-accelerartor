"use client";
import { useState } from "react";
import Star from "./Star";
import { useRouter } from "next/navigation";
import { addRatingAction } from "../app/actions";
const Rating = ({
  tempRatingProps,
  userId,
  productId,
}: {
  tempRatingProps: number;
  userId: string;
  productId: number;
}) => {
  const [rating, setRating] = useState<number>(0);
  const [tempRating, setTempRating] = useState<number>(tempRatingProps);
  const router = useRouter();
  const handleRating = async (rating: number) => {
    setRating(rating);
    try {
      await addRatingAction(rating, userId, productId);
    } catch (error) {
      console.error("Error occurred while handling form submission:", error);
    }
    router.refresh();
  };
  return (
    <div className="relative flex flex-col gap-2">
      <div className="flex center gap-2">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRait={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(tempRatingProps)}
          />
        ))}
      </div>
    </div>
  );
};
export default Rating;
