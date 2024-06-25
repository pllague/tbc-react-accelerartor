"use client";
import { useState } from "react";
import AllBlogsList from "./AllBlogsList";
import { useTranslations } from "next-intl";

const AllBlogsButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const t = useTranslations("Index");
  return (
    <>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="w-[150px] lg:w-[200px] bg-blue-500 hover:bg-orange rounded-md py-3 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear text-white "
      >
        {t("blog")}
      </button>
      {openModal ? <AllBlogsList setOpenModal={setOpenModal} /> : ""}
    </>
  );
};

export default AllBlogsButton;
