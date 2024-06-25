"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const LangSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();
  const path = usePathname();

  const handleClick = (lang: string) => {
    const nextLocale = lang;
    // window.localStorage.setItem('locale', nextLocale);
    router.replace(`/${nextLocale}/${path}`);
  };
  return (
    <div className="cursor-pointer">
      <button
        onClick={() => handleClick("en")}
        className={`pr-2 text-[18px] hover:text-orange transition-all transform duration-300 ease-linear ${
          locale === "en" ? "text-blue-500" : ""
        }`}
      >
        en
      </button>
      |
      <button
        onClick={() => handleClick("ka")}
        className={`pl-2 text-[18px] hover:text-orange transition-all transform duration-300 ease-linear ${
          locale === "ka" ? "text-blue-500" : ""
        }`}
      >
        ka
      </button>
    </div>
  );
};

export default LangSwitcher;
