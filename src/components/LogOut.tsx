"use client";
import { useTranslations } from "next-intl";
const LogOut = () => {
  const t = useTranslations("Index");
  return (
    <form action="/api/auth/logout" method="GET">
      <button className="relative group mt-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 group-hover:stroke-orange transition-all transform duration-300 ease-linear"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
        <div className="absolute top-full left-full hidden w-fit text-[14px] pb-1 px-2 rounded-md border border-white whitespace-nowrap bg-[#E5E1CC]/30 dark:bg-primary text-orange group-hover:block">
          {t("log-out")}
        </div>
      </button>
    </form>
  );
};
export default LogOut;
