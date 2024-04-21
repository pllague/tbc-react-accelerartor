import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import LogOut from "./LogOut";
import { logOut } from "@/app/actions";
import DarkMode from "./DarkMode";
import LangSwitcher from "./LangSwitcher";
import { useLocale } from "next-intl";


const Header = () => {

    const locale = useLocale();

    async function handleLogOut() {
        'use server';
        await logOut(locale);
    }
    return (
        <header className="w-full h-[70px] lg:h-[85px] bg-secondary/90 sticky top-0 z-10">
            <div className="w-full h-full flex mx-auto justify-between lg:items-center max-w-[1400px]">
                {/* logo */}
                <Link className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]" href="/">
                    <Image src="/logo.svg" priority={true} className="w-full h-full" alt="logo" width={100}
                        height={100} />
                </Link>
                {/* main navigation */}
                <Navigation layout="flex-row" />
                <div className="flex gap-4 items-center">
                    <LangSwitcher />
                    <DarkMode />
                    <LogOut handleLogOut={handleLogOut} />
                </div>
            </div>
        </header>
    );
}

export default Header;