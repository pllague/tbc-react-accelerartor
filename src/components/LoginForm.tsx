import { useTranslations } from "next-intl";
const LoginForm = () => {
  const t = useTranslations("Index");
  return (
    <form action="/api/auth/login" method="GET">
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
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
          />
        </svg>
        <div className="absolute top-full left-full hidden w-fit text-[14px] pb-1 px-2 rounded-md border border-white whitespace-nowrap bg-[#E5E1CC]/30 dark:bg-primary text-orange group-hover:block">
          {t("log-in")}
        </div>
      </button>
    </form>
  );
};

export default LoginForm;
