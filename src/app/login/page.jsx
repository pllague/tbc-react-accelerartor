import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/costants";
import LoginForm from "@/components/LoginForm";
import { redirect } from "next/navigation";
import { login } from "../actions";
import LoginError from "@/components/LoginError";
export const dynamic = 'force-dynamic'

const LoginPage = async () => {

    const cookieStore = cookies();
    const cookie = cookieStore.get(AUTH_COOKIE_KEY);
    let message = null;
    if (cookie?.value) {
        const cookieObject = JSON.parse(cookie.value);
        if (cookieObject?.token) {
            redirect('/');
        }
        if (cookieObject?.message) {
            message = cookieObject?.message;
        }
    }

    const handlLogin = async (username, password) => {
        'use server';
        await login(username, password);
    }
    return (
        <div className="w-full h-[100vh] flex flex-col gap-10 justify-center items-center">
            <LoginForm handlLogin={handlLogin} />
            {message ? <LoginError /> : ''}
        </div>
    );
}

export default LoginPage;