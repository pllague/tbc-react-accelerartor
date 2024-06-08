import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import LogOut from "./LogOut";
import DarkMode from "./DarkMode";
import LangSwitcher from "./LangSwitcher";
import { useLocale } from "next-intl";
import Cart from "./Cart";
import BurgerMenu from "./BurgerMenu";
import { getSession } from "@auth0/nextjs-auth0";
import LoginForm from "./LoginForm";
import Profile from "./Pofile";

const Header = async () => {
  const locale = useLocale();
  const session = await getSession();
  const userId = session?.user?.sub;

  return (
    <header className="w-full h-[70px] lg:h-[85px] bg-[#E5E1CC] dark:bg-secondary/90 sticky top-0 z-10">
      <div className="w-full h-full flex mx-auto justify-between items-center px-10 lg:px-0 lg:max-w-[1400px]">
        {/* logo */}
        <Link className="w-[80px] h-[80px]" href={`/${locale}`}>
          <Image
            src="/logo.svg"
            priority={true}
            className="w-full h-full"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        {/* main navigation */}
        <div className="hidden lg:block">
          <Navigation layout="flex-row" />
        </div>
        <div className="flex gap-6 lg:gap-4 items-center">
          <Cart />
          {userId && <Profile />}
          <BurgerMenu />
          <div className="hidden lg:flex gap-4 items-center">
            <LangSwitcher />
            <DarkMode />
            {userId ? <LogOut /> : <LoginForm />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
