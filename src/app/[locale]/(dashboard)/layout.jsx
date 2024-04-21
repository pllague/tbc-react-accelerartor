import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/costants";
import { redirect } from "next/navigation";

const DashboardLayout = ({ children, params: { locale } }) => {

    const cookieStore = cookies();
    const cookie = cookieStore.get(AUTH_COOKIE_KEY);

    if (!cookie?.value) {
        redirect('/' + locale + '/login');
    }
    else {
        const cookieObject = JSON.parse(cookie.value);
        if (cookieObject?.message) {
            redirect('/' + locale + '/login');
        }
    }

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default DashboardLayout;