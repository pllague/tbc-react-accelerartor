"use client";
import { useState } from "react";
import Navigation from "./Navigation";
import LangSwitcher from "./LangSwitcher";
import DarkMode from "./DarkMode";
import LogOut from "./LogOut";
import LoginForm from "./LoginForm";
import { useUser } from "@auth0/nextjs-auth0/client";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const { user } = useUser();
  const userId = user?.sub;
  return (
    <div className="relative block lg:hidden">
      <div
        className="cursor-pointer flex flex-col justify-between w-8 h-6 "
        onClick={toggleMenu}
      >
        <div className="bg-primary dark:bg-white w-1/2 h-1 rounded-2xl"></div>
        <div className="bg-primary dark:bg-white h-1 rounded-2xl"></div>
        <div className="bg-primary dark:bg-white w-1/2 h-1 rounded-2xl ml-auto"></div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-white dark:bg-primary shadow-md p-4 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="group absolute top-4 right-4" onClick={closeMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-8 h-8 group-hover:stroke-red-700 transition-all duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="pb-10 h-screen flex flex-col justify-between">
          <div className="flex flex-col gap-10">
            {userId ? <LogOut /> : <LoginForm />}
            <Navigation layout="flex-col text-[20px]" setIsOpen={setIsOpen} />
          </div>
          <div className="w-full flex flex-col gap-6 items-start">
            <div className="flex gap-4">
              <LangSwitcher />
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
