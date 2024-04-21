import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/costants";
import LoginForm from "@/components/LoginForm";
import LoginError from "@/components/LoginError";
export const dynamic = 'force-dynamic'
import { redirect } from "next/navigation";
import { login } from "../../actions";
import DarkMode from "@/components/DarkMode";
import LangSwitcher from "@/components/LangSwitcher";
import { useLocale } from "next-intl";

const LoginPage = async () => {

    const cookieStore = cookies();
    const cookie = cookieStore.get(AUTH_COOKIE_KEY);
    const locale = useLocale();

    let message = null;
    if (cookie?.value) {
        const cookieObject = JSON.parse(cookie.value);
        if (cookieObject?.token) {
            redirect('/' + locale);
        }
        if (cookieObject?.message) {
            message = cookieObject?.message;
        }
    }

    // With server action
    const handlLogin = async (username, password) => {
        'use server';
        if (username && password) {
            await login(username, password);
        }
    }

    return (
        <div className="relative w-full h-[100vh] flex flex-col gap-10 justify-center items-center">
            <div className="absolute top-5 right-10 flex gap-5">
                <LangSwitcher />
                <DarkMode />
            </div>
            <LoginForm handlLogin={handlLogin} />
            {message ? <LoginError /> : ''}
        </div>
    );
}

export default LoginPage;