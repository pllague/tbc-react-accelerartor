"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navigation: React.FC<NavigationProps> = ({ layout, setIsOpen }) => {
  const t = useTranslations("Index");
  const locale = useLocale();
  const { user } = useUser();
  const isAdmin = Array.isArray(user?.role) && user.role.includes("Admin");
  return (
    <nav className="w-full lg:max-w-fit lg:bg-transparent ">
      <ul
        className={
          "flex w-full h-full justify-end items-start text-medium gap-3 lg:gap-5 " +
          layout
        }
      >
        <li className="cursor-pointer">
          <Link
            onClick={() => setIsOpen && setIsOpen(false)}
            href={`/${locale}/products`}
            className="hover:text-orange leading-[25px] transition duration-300 ease-linear"
          >
            {t("products")}
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            onClick={() => setIsOpen && setIsOpen(false)}
            href={`/${locale}/blog`}
            className="hover:text-orange leading-[25px] transition duration-300 ease-linear"
          >
            {t("blog")}
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            onClick={() => setIsOpen && setIsOpen(false)}
            href={`/${locale}/contact`}
            className="hover:text-orange leading-[25px] transition duration-300 ease-linear"
          >
            {t("contact")}
          </Link>
        </li>
        {isAdmin && (
          <li className="cursor-pointer">
            <Link
              onClick={() => setIsOpen && setIsOpen(false)}
              href={`/${locale}/admin`}
              className="hover:text-orange leading-[25px] transition duration-300 ease-linear"
            >
              {t("admin")}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
