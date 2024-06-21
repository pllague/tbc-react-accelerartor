"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useEffect } from "react";
import { clearCartAction } from "../app/actions";

const SuccessPage = () => {
  //   const t = useTranslations('resPay')
  const locale = useLocale();
  useEffect(() => {
    clearCartAction();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-[#171717] text-white text-center">
      <h2 className="mb-6 text-2xl font-bold text-success uppercase">succ</h2>
      <button className="bg-[#f04d2e] text-white border-none py-2 px-4 text-lg cursor-pointer rounded-md">
        <Link href={`/${locale}/orders`}>Go to Orders</Link>
      </button>
    </div>
  );
};

export default SuccessPage;
