"use client";
import { useState } from "react";
import ProductCreateForm from "./ProductCreateForm";
import { useTranslations } from "next-intl";

const ProductCreateButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const t = useTranslations("Index");
  return (
    <>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="w-[150px] lg:w-[200px] bg-blue-500 hover:bg-orange rounded-md py-3 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear text-white"
      >
        {t("add-product")}
      </button>
      {openModal ? <ProductCreateForm setOpenModal={setOpenModal} /> : ""}
    </>
  );
};

export default ProductCreateButton;
