import { useLocale } from "next-intl";

const LoginForm = () => {
    const locale = useLocale();
    return (
        <form action="/api" method="POST" className="w-1/5 border-2 border-light_blue shadow-xl shadow-light_blue p-8 rounded-xl flex flex-col gap-5 justify-center items-center">
            <input
                className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
                maxLength="100"
                name="username"
                placeholder={locale === 'en' ? "Username" : "სახელი"}
                type="text"
                autoCapitalize="none"
                autoComplete="off"
                spellCheck="false"
                required
            />

            <input
                className="w-full h-full border-2 border-light_blue  py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
                maxLength="100"
                name="password"
                placeholder={locale === 'en' ? "Password" : "პაროლი"}
                type="password"
                autoCapitalize="none"
                autoComplete="off"
                spellCheck="false"
                required
            />

            <div className="w-full flex gap-3">
                <button type="submit" className="w-full h-full border-0  bg-blue-500 py-3 mx-auto text-white lg:text-[20px] rounded-[5px] hover:bg-orange transition-all transform duration-300 ease-linear">
                    {locale === 'en' ? "Log In" : "შესვლა"}
                </button>
            </div>
        </form>
    );
}

export default LoginForm;