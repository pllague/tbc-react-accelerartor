"use client";
import { useTranslations } from "next-intl";
const LogOut = () => {
  const t = useTranslations("Index");
  return (
    <form action="/api/auth/logout" method="GET">
      <button className="flex items-center gap-2 p-2 rounded-md bg-blue-500 whitespace-nowrap hover:bg-orange transform transition-all duration-300 ease-in-out ">
        <span className="text-[14px] ">{t("log-out")}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
      </button>
    </form>
  );
};
export default LogOut;
