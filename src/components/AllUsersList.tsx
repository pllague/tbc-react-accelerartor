"use client";
// import { useRouter } from "next/navigation";
// import { addProductAction } from "../app/actions";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LoadingAnimation from "./LoadingAnimation";
import Image from "next/image";
import UserEditButton from "./UserEditButton";
import DeleteUser from "./DeleteUser";
const AllUsersList = ({
  setOpenModal,
}: {
  setOpenModal: (openModal: boolean) => void;
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const t = useTranslations("Index");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_VERCEL_URL + "/api/get-users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data?.users.rows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [users]);

  function handleModalClick(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }
  return (
    <div
      onClick={() => setOpenModal(false)}
      className="absolute top-0 left-0 w-screen min-w-[700px] h-screen flex justify-center items-center bg-secondary/80 z-[999] verflow-x-auto overflow-y-auto"
    >
      {users.length === 0 ? (
        <LoadingAnimation />
      ) : (
        <div
          onClick={handleModalClick}
          className="w-[90%] lg:w-3/5  bg-white dark:bg-secondary shadow-xl shadow-white dark:shadow-black p-8 rounded-xl flex flex-col gap-5 justify-start items-center [&>input]:bg-white h-[80%] max-h-[80%] overflow-x-auto overflow-y-auto"
        >
          {users.length && (
            <div className="w-full min-w-[800px] px-2 flex justify-between">
              <div className="w-[22.5%] text-left">{t("image")}</div>
              <div className="w-[22.5%] text-left">{t("name")}</div>
              <div className="w-[30%] text-left">{t("email")}</div>
              <div className="w-[15%] text-center">{t("role")}</div>
              <div className="w-[5%] text-center">{t("edit")}</div>
              <div className="w-[5%] text-center">{t("delete")}</div>
            </div>
          )}
          {users.map((user) => (
            <div
              key={user.id}
              className="w-full min-w-[700px] px-2 flex justify-between items-center"
            >
              <div className="w-[22.5%] text-center">
                <Image
                  src={user.image_url}
                  alt="Current file"
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px] object-cover rounded"
                />
              </div>
              <div className="w-[22.5%] text-left break-words">{user.name}</div>
              <div className="w-[30%] text-left break-words">{user.email}</div>
              <div className="w-[15%] text-center break-words">{user.role}</div>
              <div className="w-[5%] text-center">
                <UserEditButton user={user} />
              </div>
              <div className="w-[5%] text-center">
                <DeleteUser id={user.id} />
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpenModal(false)}
        className="absolute top-10 right-10 text-white lg:text-[20px] rounded-[5px] group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-8 h-8 group-hover:stroke-red-700 transition-all duration-300 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default AllUsersList;
