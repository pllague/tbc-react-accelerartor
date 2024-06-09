"use client";
import { useState } from "react";
import AllProductList from "./AllProductList";
import { useTranslations } from "next-intl";

const AllProductButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const t = useTranslations("Index");
  return (
    <>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="w-fit bg-yellow-600 dark:bg-blue-500 hover:bg-orange dark:hover:bg-orange rounded-[100px] py-2 lg:py-auto px-7 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
      >
        {t("products")}
      </button>
      {openModal ? <AllProductList setOpenModal={setOpenModal} /> : ""}
    </>
  );
};

export default AllProductButton;
