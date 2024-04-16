import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/costants";
import LoginForm from "@/components/LoginForm";
import { redirect } from "next/navigation";
import { login } from "../actions";
export const dynamic = 'force-dynamic'

const LoginPage = async () => {

    const cookieStore = cookies();
    const cookie = cookieStore.get(AUTH_COOKIE_KEY);
    if (cookie?.value) {
        redirect('/');
    }

    const handlLogin = async (username, password) => {
        'use server';
        await login(username, password);
    }

    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <LoginForm handlLogin={handlLogin} />
        </div>
    );
}

export default LoginPage;