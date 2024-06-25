import { useTranslations } from "next-intl";
import Link from "next/link";

const EmptyOrders = () => {
  const t = useTranslations("Index");

  return (
    <div className="flex flex-col items-center justify-center text-white text-center mt-0 lg:mt-20 ">
      <h2 className="mb-6 text-2xl font-bold text-red uppercase">
        {t("ordersEmpty")}
      </h2>
      <button className="bg-blue-500 hover:bg-orange transform transition-all duration-300 ease-in-out text-white py-2 px-4 text-lg  rounded-md">
        <Link href="/products">{t("goToProducts")}</Link>
      </button>
    </div>
  );
};

export default EmptyOrders;
