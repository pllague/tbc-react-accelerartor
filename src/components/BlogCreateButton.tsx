"use client";
import { useState } from "react";
import BlogCreateForm from "./BlogCreateForm";
import { useTranslations } from "next-intl";

const BlogCreateButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const t = useTranslations("Index");
  return (
    <>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="w-fit bg-yellow-600 dark:bg-blue-500 hover:bg-orange dark:hover:bg-orange rounded-[100px] py-2 lg:py-auto px-7 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
      >
        {t("add-blog")}
      </button>
      {openModal ? <BlogCreateForm setOpenModal={setOpenModal} /> : ""}
    </>
  );
};

export default BlogCreateButton;
