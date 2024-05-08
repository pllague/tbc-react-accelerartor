"use client";
import { useState } from "react";
import UserForm from "./UserForm";

const CreateUserButton = () => {
  const [formModal, setFormModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setFormModal(!formModal)}
        className="w-fit bg-yellow-600 dark:bg-blue-500 hover:bg-orange rounded-[100px] py-2 lg:py-auto px-7 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
      >
        Add User
      </button>
      {formModal ? <UserForm setFormModal={setFormModal} /> : ""}
    </>
  );
};

export default CreateUserButton;
