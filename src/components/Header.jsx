import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import LogOut from "./LogOut";
import { logOut } from "@/app/actions";

const Header = () => {
    async function handleLogOut() {
        'use server';
        await logOut();
    }
    return (
        <header className="w-full h-[70px] lg:h-[85px] bg-secondary/90 sticky top-0 z-10">
            <div className="w-full h-full flex mx-auto justify-between lg:items-center max-w-[1400px]">
                {/* logo */}
                <Link className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]" href="/">
                    <Image src="/logo.svg" className="w-full h-full" alt="logo" width={100}
                        height={100} />
                </Link>
                {/* main navigation */}
                <div className="flex gap-8 items-center">
                    <Navigation layout="flex-row" />
                    <LogOut handleLogOut={handleLogOut} />
                </div>
            </div>
        </header>
    );
}

export default Header;