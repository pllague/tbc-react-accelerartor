"use client";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { useTranslations } from "next-intl";

const CheckoutButton = ({ cardsData }: { cardsData: ProductElement[] }) => {
  const [openModal, setOpenModal] = useState(false);
  const t = useTranslations("Index");
  return (
    <>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="w-fit bg-blue-500 hover:bg-orange rounded-md py-2 lg:py-auto px-7 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
      >
        {t("checkout")}
      </button>
      {openModal ? (
        <CheckoutForm
          selectedProducts={cardsData}
          setOpenModal={setOpenModal}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CheckoutButton;
