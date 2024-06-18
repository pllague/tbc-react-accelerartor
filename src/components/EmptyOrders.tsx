// import { useTranslations } from "next-intl";
import Link from "next/link";

const EmptyOrders = () => {
  //   const t = useTranslations('orders')

  return (
    <div className="flex flex-col items-center justify-center dark:bg-[#171717] text-white text-center row-start-2 sm:h-[500px]">
      <h2 className="mb-6 text-2xl font-bold text-red uppercase">empty</h2>
      <button className="bg-[#f04d2e] text-white border-none py-2 px-4 text-lg cursor-pointer rounded-md">
        <Link href="/products">See Product</Link>
      </button>
    </div>
  );
};

export default EmptyOrders;
