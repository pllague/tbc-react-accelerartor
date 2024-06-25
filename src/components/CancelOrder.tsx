"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const CancelOrder = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <div className="flex flex-col items-center justify-center my-10 lg:my-[200px] text-center">
      <h2 className="flex gap-2 items-center mb-6 text-2xl font-bold text-red uppercase">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-8 stroke-red-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        {t("paymentCanceled")}
      </h2>
      <button className="bg-blue-500 text-white border-none py-2 px-4 text-lg cursor-pointer rounded-md">
        <Link href={`/${locale}/cart`}>{t("goToCart")}</Link>
      </button>
    </div>
  );
};

export default CancelOrder;
