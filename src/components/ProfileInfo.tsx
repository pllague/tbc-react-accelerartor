"use client";
import { editProfileInfo } from "../app/actions";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfileInfo({ user }: { user: UserInfoDb }) {
  const t = useTranslations("Index");
  const [name, setName] = useState(user?.name || "");
  const [editProfileMessage, setEditProfileMessage] = useState(false);
  const userSub = user?.sub;
  const session = useUser();
  const isAdmin =
    Array.isArray(session?.user?.role) && session?.user?.role.includes("Admin");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: ProfileData = {
      name,
      userSub,
      role: isAdmin ? "Admin" : "User",
    };
    try {
      await editProfileInfo(formData);
      setEditProfileMessage(true);
      setTimeout(() => {
        setEditProfileMessage(false);
      }, 2500);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="w-full lg:w-1/4 lg:h-full relative flex flex-col gap-5 justify-center items-center">
      {user?.email && (
        <div className="w-2/3 lg:w-full flex ">
          <p className="w-1/3">{t("email")} :</p>
          <p>{user?.email}</p>
        </div>
      )}
      <div className="w-2/3 lg:w-full flex">
        <p className="w-1/3">{t("role")} :</p>
        <p>{isAdmin ? "Admin" : "User"}</p>
      </div>
      <form
        className="w-full flex flex-col gap-7 items-center"
        onSubmit={handleSubmit}
      >
        {name && (
          <div className="w-2/3 lg:w-full flex">
            <label
              htmlFor="profileInfoName"
              className="w-1/3 whitespace-nowrap"
            >
              {t("full-name")}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white border-2 border-blue-500 dark:border-light_blue pl-1 text-secondary rounded-[5px] focus:border-orange focus:outline-orange "
              id="profileInfoName"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-fit text-lg px-4 py-2 text-[16px] rounded bg-blue-500 hover:bg-orange transition-all transform duration-300 ease-linear "
        >
          {t("submit")}
        </button>
      </form>
      {editProfileMessage && (
        <div className="absolute w-fit top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded z-[9999]">
          Profile updated
        </div>
      )}
    </div>
  );
}
