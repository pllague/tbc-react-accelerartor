"use client";
import { useState } from "react";
import AllSubscribersList from "./AllSubscribersList";
import { useTranslations } from "next-intl";

const AllSubscribersButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const t = useTranslations("Index");
  return (
    <>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="w-[150px] lg:w-[200px] bg-blue-500 hover:bg-orange rounded-md py-3 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear "
      >
        {t("subscribers")}
      </button>
      {openModal ? <AllSubscribersList setOpenModal={setOpenModal} /> : ""}
    </>
  );
};

export default AllSubscribersButton;
