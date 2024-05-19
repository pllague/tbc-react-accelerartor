"use client";
import { useLocale, useTranslations } from "next-intl";
import { clearCartAction } from "../app/actions";
import { useTransition } from "react";

const ClearCartButton = ({ addOptimistic }: { addOptimistic: (action: CartWithProducts) => void }) => {
  const [, startTransition] = useTransition();
  const locale = useLocale();
  const t = useTranslations("Index");

  const handleClearCart = async () => {
    startTransition(() => addOptimistic({ count: 0, price: 0, products: [] }))
    await clearCartAction()
  }

  return (
    <button
      onClick={handleClearCart}
      className={
        " bg-yellow-600 dark:bg-blue-500 hover:bg-orange dark:hover:bg-orange rounded-[100px] py-2 lg:py-auto px-7 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear" +
        (locale === "ka" ? " lg:text-[16px]" : " lg:text-[18px]")
      }
    >
      {t("clear")}
    </button>
  );
};

export default ClearCartButton;
