"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { checkoutAction } from "../app/actions";
import LoadingAnimation from "./LoadingAnimation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTranslations } from "next-intl";

const Checkout = ({
  selectedProducts,
  setOpenModal,
}: {
  selectedProducts: ProductElement[];
  setOpenModal: (openModal: boolean) => void;
}) => {
  const t = useTranslations("Index");
  const { user } = useUser();
  const [profile, setProfile] = useState<CheckoutProfile>({
    city: "",
    address: "",
    phone: "",
    sub: user?.sub,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    await checkoutAction(selectedProducts, profile);
    setLoading(false);
    setOpenModal(false);
  };

  const countSubtotal = selectedProducts.reduce(
    (curr: number, acc: ProductElement) => {
      return curr + acc.quantity! * acc.price;
    },
    0
  );

  const subtotal = Math.round(countSubtotal * 100) / 100;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-secondary/80 z-[999]">
      <form
        onSubmit={handleSubmit}
        className="w-3/5 relative bg-white dark:bg-secondary shadow-xl shadow-white dark:shadow-black p-8 rounded-xl flex flex-col gap-5 justify-center items-center [&>input]:bg-white"
      >
        <div className="w-1/2">
          <h3 className="text-[24px] mb-4 font-normal text-black dark:text-white text-center">
            Cart Totals
          </h3>
          <p className="flex justify-between">
            <span className="text-[16px] font-bold">Sub Total</span>
            <span className="text-[16px]">${subtotal}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-[16px] font-bold">Delivery</span>
            <span className="text-[16px]">$0.00</span>
          </p>
          <p className="flex justify-between mb-2 pb-2 border-b-2 border-blue-500">
            <span className="text-[16px] font-bold">Discount</span>
            <span className="text-[16px]">$0.00</span>
          </p>

          <p className="flex justify-between pt-2">
            <span className="text-[22px] font-bold">{t("total")}</span>
            <span className="text-[22px] text-black font-bold dark:text-blue-500">
              ${subtotal - 0 - 0}
            </span>
          </p>
        </div>
        <div className="w-3/5 flex flex-col gap-2">
          <label
            htmlFor="checkoutCity"
            className="text-black font-normal dark:text-white"
          >
            {t("city")}
          </label>
          <input
            type="text"
            name="city"
            id="checkoutCity"
            value={profile.city}
            onChange={handleChange}
            className="border-[1px] border-solid rounded-md border-blue-500 py-[5px] pl-[20px] bg-white dark:text-black"
          />
          <label
            htmlFor="checkoutAddress"
            className="text-black font-normal dark:text-white"
          >
            {t("address")}
          </label>
          <input
            type="text"
            name="address"
            id="checkoutAddress"
            value={profile.address}
            onChange={handleChange}
            className="border-[1px] border-solid rounded-md border-blue-500 py-[5px] pl-[20px] bg-white dark:text-black"
          />
          <label
            htmlFor="checkoutPhone"
            className="text-black font-normal dark:text-white"
          >
            {t("phone")}
          </label>
          <input
            type="text"
            name="phone"
            id="checkoutPhone"
            value={profile.phone}
            onChange={handleChange}
            className="border-[1px] border-solid rounded-md border-blue-500 py-[5px] pl-[20px] bg-white dark:text-black"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 rounded-md hover:bg-orange transform transition-all duration-300 ease-in-out"
        >
          {loading ? <LoadingAnimation /> : t("buyNow")}
        </button>
        <button
          onClick={() => setOpenModal(false)}
          className="absolute top-5 right-5 text-white lg:text-[20px] rounded-[5px] group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-8 h-8 text-blue-500 group-hover:stroke-red-700 transition-all duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Checkout;
