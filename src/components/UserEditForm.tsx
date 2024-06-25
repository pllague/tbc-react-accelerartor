"use client";
import { useRouter } from "next/navigation";
import { updateUserAction } from "../app/actions";
import { useState } from "react";
const UserEditForm = ({
  setOpenModal,
  user,
}: {
  setOpenModal: (openModal: boolean) => void;
  user: User;
}) => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: user.name ? user.name : "",
    email: user.email ? user.email : "",
  });

  const { name, email } = userData;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      await updateUserAction(formData);
      setOpenModal(false);
    } catch (error) {
      console.error("Error occurred while handling form submission:", error);
    }
    router.refresh();
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-secondary/80 z-[999]">
      <form
        onSubmit={handleSubmit}
        className="w-1/5 border-2 border-blue-500 bg-white dark:bg-secondary dark:border-light_blue shadow-xl shadow-red-300 dark:shadow-light_blue p-8 rounded-xl flex flex-col gap-5 justify-center items-center [&>input]:bg-white"
      >
        <input
          className="hidden w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
          type="text"
          name="id"
          placeholder="ID"
          value={user.id}
        />
        <input
          className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <div className="w-full flex gap-3">
          <button
            onClick={() => setOpenModal(false)}
            className="w-full h-full border-0 bg-red-800 py-3 mx-auto text-white lg:text-[20px] rounded-[5px] hover:bg-orange transition-all transform duration-300 ease-linear"
          >
            Cancel
          </button>
          <button
            className="w-full h-full border-0 bg-blue-500 dark:bg-blue-500 hover:bg-orange dark:hover:bg-orange rounded-[5px] py-3 lg:py-auto px-7 font-small lg:text-[20px] lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear text-white"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserEditForm;
