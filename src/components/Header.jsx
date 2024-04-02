import Image from "next/image";
import Link from "next/link";
// import logo from "/next.svg";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="w-full h-[70px] lg:h-[85px] bg-secondary/90 sticky top-0 z-10">
            <div className="w-full h-full flex mx-auto justify-between lg:items-center max-w-[1400px]">
                {/* logo */}
                <Link className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]" href="/">
                    <Image src="/logo.svg" className="w-full h-full" alt="logo" width={100}
                        height={100} />
                </Link>
                {/* main navigation */}
                <Navigation layout="flex-row" />
            </div>
        </header>
    );
}

export default Header;