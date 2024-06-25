"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addReviewAction } from "../app/actions";
import { useTranslations } from "next-intl";

const Comment = ({
  productId,
  userName,
  userId,
}: {
  productId: number;
  userId: string;
  userName: string;
}) => {
  const t = useTranslations("Index");
  const [review, setReview] = useState<string>("");
  const [isCommented, setIsCommented] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const productRate: ProductRate = {
      userId,
      userName,
      productId,
      review,
    };
    try {
      await addReviewAction(productRate);
      setIsCommented(true);
      setReview("");
      setTimeout(() => {
        setIsCommented(false);
      }, 2000);
    } catch (error) {
      console.error("Error occurred while handling form submission:", error);
    }
    router.refresh();
  };
  return (
    <div className="relative flex flex-col gap-2 w-full lg:w-2/3 mx-auto mb-5 lg:mb-10">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] mx-auto lg:mx-0 lg:w-3/5 rounded-xl flex flex-col gap-5 justify-center items-end"
      >
        <textarea
          className="w-full h-[75px] lg:h-[150px] bg-white dark:bg-gray-700 border-2 border-blue-500 p-3 text-white lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
          placeholder={t("AddYourComment")}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
        <button
          className="w-fit border-0 bg-blue-500 hover:bg-orange dark:hover:bg-orange rounded-[5px] py-3 lg:py-auto px-7 font-small lg:text-[20px] lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
          type="submit"
        >
          {t("post")}
        </button>
      </form>
      {/* Success message */}
      {isCommented && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded z-[9999]">
          {t("comment-is-added")}
        </div>
      )}
    </div>
  );
};
export default Comment;
