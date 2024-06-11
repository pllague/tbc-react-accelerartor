"use client";
import { useState } from "react";
import Star from "./Star";
import { useRouter } from "next/navigation";
import { addReviewAction } from "../app/actions";

const Rating = ({
  productId,
  userName,
  userId,
}: {
  productId: number;
  userId: string;
  userName: string;
}) => {
  const [rating, setRating] = useState<number>(0);
  const [tempRating, setTempRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const router = useRouter();
  function handleRating(rating: number) {
    setRating(rating);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const productRate: ProductRate = {
      userId,
      userName,
      productId,
      review,
      rating,
    };
    try {
      await addReviewAction(productRate);
    } catch (error) {
      console.error("Error occurred while handling form submission:", error);
    }
    router.refresh();
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex center gap-2 px-8">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRait={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-2/5 px-8 rounded-xl flex flex-col gap-5 justify-center items-end"
      >
        <textarea
          className="w-full h-[75px] lg:h-[150px] bg-gray-700 border-2 border-light_blue py-3 pl-1 text-white lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
          placeholder="Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
        <button
          className="w-fit border-0 bg-yellow-600 dark:bg-blue-500 hover:bg-orange dark:hover:bg-orange rounded-[5px] py-3 lg:py-auto px-7 font-small lg:text-[20px] lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};
export default Rating;
