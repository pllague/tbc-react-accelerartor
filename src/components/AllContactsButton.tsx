"use client";
import { useState } from "react";
import AllContactsList from "./AllContactsList";
import { useTranslations } from "next-intl";

const AllContactsButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const t = useTranslations("Index");
  return (
    <>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="w-[150px] lg:w-[200px] bg-blue-500 hover:bg-orange rounded-md py-3 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear "
      >
        {t("contact")}
      </button>
      {openModal ? <AllContactsList setOpenModal={setOpenModal} /> : ""}
    </>
  );
};

export default AllContactsButton;
