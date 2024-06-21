"use client";

import { useLocale } from "next-intl";
import Link from "next/link";

const CancelOrder = () => {
  //   const t = useTranslations('resPay')
  const locale = useLocale();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-[#171717] text-white text-center">
      <h2 className="mb-6 text-2xl font-bold text-red uppercase">Cancel</h2>
      <button className="bg-[#f04d2e] text-white border-none py-2 px-4 text-lg cursor-pointer rounded-md">
        <Link href={`/${locale}/cart`}>Go to cart</Link>
      </button>
    </div>
  );
};

export default CancelOrder;
