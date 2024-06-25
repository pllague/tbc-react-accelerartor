import Link from "next/link";
import Navigation from "./Navigation";
import { useTranslations } from "next-intl";
import SubscribtionForm from "./SubscribtionForm";

const Footer = () => {
  const t = useTranslations("Index");

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="bg-white dark:bg-secondary w-full px-10 py-8 ">
      <div className="w-full max-w-[90%] mx-auto">
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex flex-col lg:mb-0 gap-3 lg:gap-5 *:text-[14px] *:leading-[25px] ">
            <span>&copy; {currentYear} Classic Football Shirts</span>
            <Link
              href="#"
              className="hover:text-orange transition-all transform duration-300 ease-linear"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href="#"
              className="hover:text-orange transition-all transform duration-300 ease-linear"
            >
              {t("terms")}
            </Link>
          </div>
          <SubscribtionForm />
          <Navigation layout="flex-col" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
