"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect } from "react";
import { clearCartAction } from "../app/actions";

const SuccessPage = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  useEffect(() => {
    clearCartAction();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center my-10 lg:my-[200px] text-center">
      <h2 className="flex gap-2 items-center mb-6 text-2xl font-bold text-red uppercase">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 stroke-green-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        {t("successOrder")}
      </h2>
      <button className="bg-blue-500 text-white border-none py-2 px-4 text-lg cursor-pointer rounded-md">
        <Link href={`/${locale}/orders`}>{t("goToOrders")}</Link>
      </button>
    </div>
  );
};

export default SuccessPage;
