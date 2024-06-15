"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LoadingAnimation from "./LoadingAnimation";
import { formatDate } from "../helpers";
const AllSubscribersList = ({
  setOpenModal,
}: {
  setOpenModal: (openModal: boolean) => void;
}) => {
  const [subscribers, setSubscribers] = useState<SubscribersData[]>([]);
  const t = useTranslations("Index");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_VERCEL_URL +
            "/api/subscribers/get-subscribers"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSubscribers(data.subscribers.rows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-secondary/80 z-[999]">
      {subscribers.length === 0 ? (
        <LoadingAnimation />
      ) : (
        <div className="w-2/5 bg-[#E5E1CC] dark:bg-secondary shadow-xl shadow-white dark:shadow-black p-8 rounded-xl flex flex-col justify-start items-center [&>input]:bg-white h-[80%] max-h-[80%] overflow-x-auto overflow-y-auto">
          {subscribers.length && (
            <div className="w-full px-2 flex justify-between border-b-2 pb-2">
              <div className="w-1/2 text-left pl-5">{t("email")}</div>
              <div className="w-1/2 text-left pl-5">{t("added_on")}</div>
            </div>
          )}
          {subscribers.map((subscriber) => (
            <div
              key={subscriber.id}
              className="w-full px-2 flex justify-between items-start border-b py-2"
            >
              <div className="w-1/2 text-left pl-5 break-words">
                {subscriber.email}
              </div>
              <div className="w-1/2 text-left pl-5 break-words">
                {formatDate(subscriber.added_on)}
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

export default AllSubscribersList;
