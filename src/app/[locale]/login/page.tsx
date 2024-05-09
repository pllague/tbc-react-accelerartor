import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../constants";
import LoginForm from "../../../components/LoginForm";
import LoginError from "../../../components/LoginError";
export const dynamic = 'force-dynamic'
import DarkMode from "../../../components/DarkMode";
import LangSwitcher from "../../../components/LangSwitcher";

const LoginPage = async () => {

    const cookieStore = cookies();
    const cookie = cookieStore.get(AUTH_COOKIE_KEY);

    let message: string | null = null;
    if (cookie?.value) {
        const cookieObject = JSON.parse(cookie.value);
        if (cookieObject?.message) {
            message = cookieObject?.message;
        }
    }

    return (
        <div className="relative w-full h-[100vh] flex flex-col gap-10 justify-center items-center">
            <div className="absolute top-5 right-10 flex gap-5">
                <LangSwitcher />
                <DarkMode />
            </div>
            <LoginForm />
            {message ? <LoginError /> : ''}
        </div>
    );
}

export default LoginPage;