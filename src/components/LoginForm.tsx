import { useTranslations } from "next-intl";
const LoginForm = () => {
  const t = useTranslations("Index");
  return (
    <form action="/api/auth/login" method="GET">
      <button className="flex items-center gap-2 p-2 rounded-md bg-blue-500 whitespace-nowrap hover:bg-orange transform transition-all duration-300 ease-in-out ">
        <span className="text-[14px]">{t("log-in")}</span>
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
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
          />
        </svg>
      </button>
    </form>
  );
};

export default LoginForm;
