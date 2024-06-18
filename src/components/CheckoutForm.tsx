"use client";

import { ChangeEvent, FormEvent, useState } from "react";
// import { selectedProduct } from "../../types/products-types";
// import { AuthUser, CheckoutProfile } from "../../types/profile-types";
import { checkoutAction } from "../app/actions";
import LoadingAnimation from "./LoadingAnimation";
import { useUser } from "@auth0/nextjs-auth0/client";
// import { useTranslations } from "next-intl";
// import ThemeLoader from "../UI/ThemeLoader";

const Checkout = ({
  selectedProducts,
  setOpenModal,
}: {
  selectedProducts: productElement[];
  setOpenModal: (openModal: boolean) => void;
}) => {
  //   const [cartProducts, setCartProducts] = useState<productElement[] | []>([]);
  const { user } = useUser();
  const [profile, setProfile] = useState<CheckoutProfile>({
    city: "",
    address: "",
    phone: "",
    sub: user?.sub,
  });
  const [loading, setLoading] = useState(false);
  //   const t = useTranslations("profile");
  //   const tCart = useTranslations("cart");

  //   useEffect(() => {
  //     setCartProducts(selectedProducts);
  //   }, []);

  //   useEffect(() => {
  //     if (authUser) {
  //       setProfile({
  //         city: authUser.city || "",
  //         address: authUser.address || "",
  //         phone: authUser.phone || "",
  //         sub: authUser.sub || "",
  //       });
  //     }
  //   }, [authUser]);

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
    (curr: number, acc: productElement) => {
      return curr + acc.quantity! * acc.price;
    },
    0
  );

  const subtotal = Math.round(countSubtotal * 100) / 100;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-secondary/80 z-[999]">
      <form
        onSubmit={handleSubmit}
        className="w-3/5 relative bg-[#E5E1CC] dark:bg-secondary shadow-xl shadow-white dark:shadow-black p-8 rounded-xl flex flex-col gap-5 justify-center items-center [&>input]:bg-white"
      >
        <div>
          <h3 className="text-[24px] mb-4 font-normal text-black dark:text-white">
            Cart Totals
          </h3>
          <p className="flex justify-between">
            <span className="text-[16px] font-bold">Sub Total</span>
            <span className="text-[16px]">${subtotal}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-[16px] font-bold"> delivery</span>
            <span className="text-[16px]">$0.00</span>
          </p>
          <p className="flex justify-between mb-4">
            <span className="text-[16px] font-bold">discount</span>
            <span className="text-[16px]">$0.00</span>
          </p>
          <hr className="text-red-500" />
          <p className="flex justify-between p-4">
            <span className="text-[22px] font-bold">Total</span>
            <span className="text-[22px] text-black font-bold dark:text-red-500">
              ${subtotal - 0 - 0}
            </span>
          </p>
        </div>
        <div className="w-3/5 flex flex-col gap-2">
          <h2 className="text-black font-normal dark:text-white">city</h2>
          <input
            type="text"
            name="city"
            value={profile.city}
            onChange={handleChange}
            className="border-[1px] border-solid border-red-500 py-[5px] pl-[20px] dark:text-white"
          />
          <h2 className="text-black font-normal dark:text-white">address</h2>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="border-[1px] border-solid border-red-500 py-[5px] pl-[20px] dark:text-white"
          />
          <h2 className="text-black font-normal dark:text-white">phone</h2>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="border-[1px] border-solid border-red-500 py-[5px] pl-[20px] dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="p-[7px] px-[25px] border border-solid border-red-500 text-[18px] text-white bg-red-500 font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 hover:bg-lightred hover:text-white my-4 w-full sm:w-[300px]"
        >
          Buy Now
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
            className="w-8 h-8 group-hover:stroke-red-700 transition-all duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </form>
      {loading ?? <LoadingAnimation />}
    </div>
  );
};

export default Checkout;
