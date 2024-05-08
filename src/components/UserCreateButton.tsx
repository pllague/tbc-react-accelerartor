"use client";
import { useState } from "react";
import UserCreateForm from "./UserCreateForm";

const UserCreateButton = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="w-fit bg-yellow-600 dark:bg-blue-500 hover:bg-orange rounded-[100px] py-2 lg:py-auto px-7 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
      >
        Add User
      </button>
      {openModal ? <UserCreateForm setOpenModal={setOpenModal} /> : ""}
    </>
  );
};

export default UserCreateButton;
