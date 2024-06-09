// import Image from "next/image";
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
        <Link className="w-[120px] lg:w-[150px]" href={`/${locale}`}>
          {/* <Image
            src="/logo.svg"
            priority={true}
            className="w-full h-full"
            alt="logo"
            width={100}
            height={100}
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 261 80.95"
            className="w-full h-full"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_3" data-name="Layer 3">
                <path
                  className="fill-black dark:fill-white"
                  d="M94.47,2.19A11.09,11.09,0,0,0,90,1.33c-4.67,0-8.39,3.19-8.39,8.27a8.07,8.07,0,0,0,8.44,8.27A11.35,11.35,0,0,0,94.6,17L95,18.07a10.82,10.82,0,0,1-5,1c-5.28,0-9.86-3.63-9.86-9.49A9.38,9.38,0,0,1,89.82.1a11.86,11.86,0,0,1,5.06,1Zm-.73,1.89a9.1,9.1,0,0,0-3.84-.73A5.89,5.89,0,0,0,84,9.6a6,6,0,0,0,6.11,6.25,8.19,8.19,0,0,0,3.75-.78l.45,1.18a9.5,9.5,0,0,1-4.17.84,7.31,7.31,0,0,1-7.59-7.47,7.26,7.26,0,0,1,7.52-7.48A10.77,10.77,0,0,1,94.16,3Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M107.75,17.82v1H99V4.32h1.11V17.84h7.67Zm0-.62h-6.92V4.3H102V16.24h5.8Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M118.56,4.3l5.86,14.46H123.3l-5.45-13.4h-1l-5.45,13.4h-1.11L116.18,4.3Zm-4.32,12.33-.83,2.15h-1.23l1.26-3.09h7.81l1.26,3.09h-1.23l-.83-2.15Zm-.54-1.56,3.66-9,3.65,9Zm5.84-.92-2.18-5.63-2.17,5.61h4.35v0Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M127,17.84l.33-.9a8.27,8.27,0,0,0,4,1.1c2.67,0,4.09-1.18,4.09-3.23,0-1.86-1-2.78-3.25-3.81s-3-1.82-3-3.12,1.16-2.22,2.83-2.22a6.91,6.91,0,0,1,3.26.87l-.35.9a5,5,0,0,0-2.68-.81c-1.31,0-1.93.48-1.93,1.23s.54,1.29,2.5,2.19c2.53,1.16,3.74,2.44,3.74,4.62,0,2.67-1.81,4.37-5.24,4.37A8.85,8.85,0,0,1,127,17.84Zm6.54-3c0-1.07-.75-1.67-2.53-2.43-2.88-1.26-3.71-2.58-3.71-4.46,0-2.33,1.65-3.92,4.64-3.92a7.65,7.65,0,0,1,3.88,1l-.34.89A7.19,7.19,0,0,0,132,5.05c-2.21,0-3.53,1.16-3.53,2.85s1,2.65,3.4,3.72c2,.9,2.83,1.65,2.83,3.23s-1.19,2.61-3.37,2.61a7.56,7.56,0,0,1-3.75-1l.35-1a6.09,6.09,0,0,0,3.31,1C132.66,16.45,133.55,15.88,133.55,14.88Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M139.34,17.84l.33-.9a8.24,8.24,0,0,0,4,1.1c2.67,0,4.09-1.18,4.09-3.23,0-1.86-1-2.78-3.25-3.81s-3-1.82-3-3.12,1.16-2.22,2.83-2.22a7,7,0,0,1,3.26.87l-.35.9a5.06,5.06,0,0,0-2.69-.81c-1.3,0-1.92.48-1.92,1.23s.54,1.29,2.5,2.19c2.53,1.16,3.74,2.44,3.74,4.62,0,2.67-1.82,4.37-5.24,4.37A8.88,8.88,0,0,1,139.34,17.84Zm6.55-3c0-1.07-.75-1.67-2.53-2.43-2.88-1.26-3.71-2.58-3.71-4.46,0-2.33,1.65-3.92,4.64-3.92a7.72,7.72,0,0,1,3.89,1l-.35.89a7.19,7.19,0,0,0-3.52-.92c-2.21,0-3.53,1.16-3.53,2.85s1,2.65,3.4,3.72c2,.9,2.83,1.65,2.83,3.23s-1.19,2.61-3.37,2.61a7.56,7.56,0,0,1-3.75-1l.35-1a6.09,6.09,0,0,0,3.31,1C145,16.45,145.89,15.88,145.89,14.88Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M153.85,18.78h-1.11V4.32h1.11Zm.75,0V4.32h1.12V18.78Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M170.85,5.72A8.69,8.69,0,0,0,167.34,5a6.32,6.32,0,0,0-6.62,6.51,6.35,6.35,0,0,0,6.65,6.51,9,9,0,0,0,3.58-.7l.33.87a8.48,8.48,0,0,1-3.92.81c-4.15,0-7.76-2.85-7.76-7.47a7.39,7.39,0,0,1,7.6-7.48,9.6,9.6,0,0,1,4,.78Zm-.57,1.48a6.87,6.87,0,0,0-3-.58,4.64,4.64,0,0,0-4.64,4.92,4.69,4.69,0,0,0,4.81,4.92,6.48,6.48,0,0,0,3-.63l.35.93a7.66,7.66,0,0,1-3.29.66,5.74,5.74,0,0,1-6-5.88,5.7,5.7,0,0,1,5.93-5.88,8.48,8.48,0,0,1,3.23.63Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M91.72,61l-1.93.92a1.17,1.17,0,0,1-.4.14.91.91,0,0,1-.62-.38,2.83,2.83,0,0,0-4.09,0,2.81,2.81,0,0,0-.86,2A2.56,2.56,0,0,0,85.05,66a16,16,0,0,0,2.18,1.15,18.57,18.57,0,0,1,3.35,1.82,6.1,6.1,0,0,1,2.58,5.2A6.69,6.69,0,0,1,91.22,79,6.31,6.31,0,0,1,86.59,81h-.13A6.37,6.37,0,0,1,81.73,79a3.73,3.73,0,0,1-1.34-2.26.55.55,0,0,1,.21-.44,22.47,22.47,0,0,1,2.13-.75,1,1,0,0,1,.32-.06c.2,0,.44.19.75.55a3.23,3.23,0,0,0,2.65,1.26,3.14,3.14,0,0,0,3.12-3.13A3.22,3.22,0,0,0,88,71.47a12.72,12.72,0,0,0-2.11-1.08,14.33,14.33,0,0,1-3.72-2,5.66,5.66,0,0,1-2-4.55A6.53,6.53,0,0,1,82.06,59a6.4,6.4,0,0,1,4.68-1.89,6.2,6.2,0,0,1,4.48,1.8c.66.62,1,1.11,1,1.46A.77.77,0,0,1,91.72,61Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M102.12,61.86v7.35a.2.2,0,0,0,.22.22h7a.2.2,0,0,0,.22-.22V61.86c0-.43.21-.64.64-.64h1.75c.43,0,.63.21.63.64V80.07c0,.43-.2.64-.63.64h-1.75a.56.56,0,0,1-.64-.64V72.69a.2.2,0,0,0-.22-.22h-7a.2.2,0,0,0-.22.22v7.38c0,.43-.21.64-.64.64H99.73c-.43,0-.63-.21-.63-.64V61.86c0-.43.2-.64.63-.64h1.75A.56.56,0,0,1,102.12,61.86Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M119,61.26h1.75c.43,0,.63.2.63.63V80.07c0,.43-.2.64-.63.64H119a.56.56,0,0,1-.64-.64V61.89C118.39,61.45,118.6,61.24,119,61.26Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M136.41,80.36l-4-7.06a.3.3,0,0,0-.27-.17h-1.62a.21.21,0,0,0-.22.23v6.71c0,.43-.21.64-.64.64h-1.78c-.43,0-.63-.21-.63-.64V61.86c0-.43.2-.64.63-.64h4.93a5.74,5.74,0,0,1,4.28,1.72,6,6,0,0,1,1.72,4.41,5.77,5.77,0,0,1-3.09,5.17c-.11.08-.17.12-.17.16a.09.09,0,0,0,0,0l4.23,7.39a.59.59,0,0,1,.08.26c0,.22-.14.33-.41.33h-2.28A.83.83,0,0,1,136.41,80.36Zm-6.14-15.91v5.66a.2.2,0,0,0,.22.23h1.91a3.41,3.41,0,0,0,2.66-1,3,3,0,0,0,.71-2.06,3.18,3.18,0,0,0-.68-2.07,2.78,2.78,0,0,0-2.29-1h-2.31C130.33,64.25,130.27,64.31,130.27,64.45Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M154.51,64.26h-3.85a.2.2,0,0,0-.23.22V80.07c0,.43-.2.64-.63.64H148c-.43,0-.63-.21-.63-.64V64.48a.2.2,0,0,0-.22-.22h-3.81c-.43,0-.63-.21-.63-.64V61.84c0-.43.2-.63.63-.63h11.12c.43,0,.64.2.64.63v1.78C155.16,64.07,154.94,64.28,154.51,64.26Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M169.12,64.26l-1.61.78a.81.81,0,0,1-.33.11c-.16,0-.32-.11-.52-.32a2.29,2.29,0,0,0-1.76-.74,2.21,2.21,0,0,0-1.65.71,2.32,2.32,0,0,0-.71,1.7,2.17,2.17,0,0,0,1,1.91,13.19,13.19,0,0,0,1.81,1,16.3,16.3,0,0,1,2.8,1.53,5.1,5.1,0,0,1,2.15,4.34,5.57,5.57,0,0,1-1.62,4.09,5.27,5.27,0,0,1-3.85,1.61h-.1a5.31,5.31,0,0,1-4-1.59,3,3,0,0,1-1.11-1.88.43.43,0,0,1,.17-.36,18.26,18.26,0,0,1,1.78-.62.86.86,0,0,1,.27,0c.18,0,.38.16.63.46a2.71,2.71,0,0,0,2.21,1,2.48,2.48,0,0,0,1.82-.78,2.54,2.54,0,0,0,.78-1.85A2.67,2.67,0,0,0,166.08,73a10.06,10.06,0,0,0-1.76-.91,12.53,12.53,0,0,1-3.11-1.72,4.73,4.73,0,0,1-1.7-3.78,5.44,5.44,0,0,1,1.58-4A5.27,5.27,0,0,1,165,61.05a5.15,5.15,0,0,1,3.74,1.49c.55.51.81.92.81,1.23A.67.67,0,0,1,169.12,64.26Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M87,41.82v10c0,1-.46,1.46-1.45,1.44H81.62a1.24,1.24,0,0,1-1.45-1.44V25.2c0-1,.46-1.46,1.45-1.45h14a1.26,1.26,0,0,1,1.45,1.45v3.91a1.25,1.25,0,0,1-1.45,1.45H87V35h8.68c1,0,1.46.46,1.45,1.44v3.92a1.25,1.25,0,0,1-1.45,1.44Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M115.1,28a11.88,11.88,0,0,1,8.71,3.67,12.67,12.67,0,0,1-.07,17.91,12.41,12.41,0,0,1-17.54,0,12.67,12.67,0,0,1-.07-17.91A12.24,12.24,0,0,1,115.1,28ZM115,33.66a6.52,6.52,0,0,0-4.74,2,6.92,6.92,0,0,0,0,9.8,6.78,6.78,0,0,0,9.63,0,6.66,6.66,0,0,0,2-4.9,6.78,6.78,0,0,0-2.06-5A6.57,6.57,0,0,0,115,33.66Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M145,28a11.89,11.89,0,0,1,8.72,3.67,12.67,12.67,0,0,1-.07,17.91,12.41,12.41,0,0,1-17.54,0A12.67,12.67,0,0,1,136,31.67,12.23,12.23,0,0,1,145,28Zm-.14,5.66a6.52,6.52,0,0,0-4.74,2,6.92,6.92,0,0,0,0,9.8,6.77,6.77,0,0,0,9.62,0,6.63,6.63,0,0,0,2-4.9,6.77,6.77,0,0,0-2.05-5A6.51,6.51,0,0,0,144.85,33.66Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M171.94,33.91V51.6c0,.83-.38,1.23-1.2,1.19h-3.26c-.82,0-1.22-.38-1.19-1.19V33.91h-3.91c-.83,0-1.23-.38-1.19-1.19V29.46c0-.82.38-1.22,1.19-1.19H176c.83,0,1.23.38,1.19,1.19v3.26c0,.83-.38,1.23-1.19,1.19Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M195.16,39.2A7.78,7.78,0,0,1,197.64,45a7.54,7.54,0,0,1-2.25,5.5,7.34,7.34,0,0,1-5.45,2.36h-6.6c-.83,0-1.23-.38-1.19-1.19V29.45c0-.83.38-1.23,1.19-1.19h6.28a6.24,6.24,0,0,1,4.57,1.91,6.86,6.86,0,0,1,2.08,5A8.37,8.37,0,0,1,195.16,39.2Zm-7.35-1.88h1.45a1.42,1.42,0,0,0,1.08-.51,1.62,1.62,0,0,0,.41-1.11,1.74,1.74,0,0,0-.46-1.21,1.52,1.52,0,0,0-1.16-.56h-1.32v3.39Zm0,9.84h2a2,2,0,0,0,1.49-.62,2.27,2.27,0,0,0,.7-1.73,2.33,2.33,0,0,0-.68-1.73,2,2,0,0,0-1.51-.61h-2Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M209.15,48.52l-1.5,3.37a1.42,1.42,0,0,1-1.44.94h-3.77c-.61,0-.91-.23-.91-.69a1.19,1.19,0,0,1,.12-.48l9-22.5a1.36,1.36,0,0,1,1.42-.94h2a1.35,1.35,0,0,1,1.41.94l9,22.5a1.1,1.1,0,0,1,.11.47c0,.47-.3.69-.9.69h-3.66a1.41,1.41,0,0,1-1.45-.94l-1.49-3.37h-8Zm4-10-1.88,4.63H215Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M235.46,47.16h6.28c.83,0,1.22.38,1.19,1.2v3.26c0,.82-.38,1.22-1.19,1.19H231c-.83,0-1.22-.38-1.19-1.19V29.43c0-.83.38-1.23,1.19-1.19h3.26c.83,0,1.23.38,1.19,1.19V47.16Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M253.52,47.16h6.29c.82,0,1.22.38,1.19,1.2v3.26c0,.82-.38,1.22-1.19,1.19H249.07c-.83,0-1.22-.38-1.19-1.19V29.43c0-.83.38-1.23,1.19-1.19h3.26c.83,0,1.23.38,1.19,1.19V47.16Z"
                ></path>
                <rect
                  className="fill-black dark:fill-white"
                  x="70.01"
                  width="3.74"
                  height="80.95"
                ></rect>
                <path
                  className="fill-black dark:fill-white"
                  d="M31.78,10.9a6.63,6.63,0,1,0,6,9.39,6.54,6.54,0,0,0,.62-2.77A6.66,6.66,0,0,0,31.78,10.9Zm3.82,8.39a4.22,4.22,0,0,1-1.52,1.77A4.2,4.2,0,0,1,28,19.29a4.21,4.21,0,1,1,8-1.75A4,4,0,0,1,35.6,19.29Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M51,32.58l-7.73-7.07a3.18,3.18,0,0,0-2.16-.84H37.37A3.15,3.15,0,0,0,35,25.79a4.16,4.16,0,0,1-6.36,0,3.14,3.14,0,0,0-2.41-1.12H22.47a3.2,3.2,0,0,0-2.16.84l-7.73,7.07a3.17,3.17,0,0,0-.09,4.59l3.66,3.67a3.2,3.2,0,0,0,2.25.93,3.34,3.34,0,0,0,.84-.12V56.84A3.19,3.19,0,0,0,22.42,60H41.13a3.2,3.2,0,0,0,3.18-3.19V41.68a3.4,3.4,0,0,0,.84.11,3.16,3.16,0,0,0,2.25-.93l3.66-3.66A3.15,3.15,0,0,0,52,34.88,3.21,3.21,0,0,0,51,32.58Zm-1.61,2.9-3.66,3.66a.76.76,0,0,1-1.09,0L43.19,37.7a.73.73,0,0,0-.54-.23.77.77,0,0,0-.78.78V56.84a.77.77,0,0,1-.77.78H22.39a.77.77,0,0,1-.77-.78V38.27a.79.79,0,0,0-.78-.78.77.77,0,0,0-.54.23l-1.44,1.44a.75.75,0,0,1-1.08,0L14.11,35.5a.78.78,0,0,1,0-1.12l7.73-7.07a.76.76,0,0,1,.53-.2h3.72a.74.74,0,0,1,.57.25,6.64,6.64,0,0,0,5,2.31,6.57,6.57,0,0,0,5-2.31.77.77,0,0,1,.57-.25H41a.81.81,0,0,1,.52.2l7.74,7.07A.74.74,0,0,1,49.38,35.48Z"
                ></path>
                <path
                  className="fill-black dark:fill-white"
                  d="M52.7.26H10.87C4.89.26,0,4.8,0,10.4V51.91a9.9,9.9,0,0,0,3.34,7.33L24.28,78.11a11.42,11.42,0,0,0,15.07,0L60.27,59.24a9.92,9.92,0,0,0,3.32-7.33V10.4C63.56,4.78,58.7.26,52.7.26Zm7.14,51.65a6.08,6.08,0,0,1-2.1,4.54L36.83,75.35a7.58,7.58,0,0,1-5,1.89,7.48,7.48,0,0,1-5-1.89L5.81,56.45A6.13,6.13,0,0,1,3.7,51.91V10.39C3.7,6.85,6.91,4,10.84,4H52.67c3.95,0,7.14,2.87,7.14,6.43V51.91Z"
                ></path>
              </g>
            </g>
          </svg>
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
