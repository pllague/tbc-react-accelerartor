"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addSubscriberAction } from "../app/actions";

const SubscribtionForm = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const t = useTranslations("Index");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addSubscriberAction(email);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    } catch (error) {
      console.error("Error creating user:", error);
    }
    router.refresh();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col lg:flex-row h-[50px] lg:h-[65px] bg-white rounded-[100px] items-center p-[5px] "
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="mr-2 lg:mr-0 lg:ml-3 ">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.35046 2.5H16.4635C16.6714 2.5 16.8709 2.5878 17.0179 2.74408C17.1649 2.90036 17.2475 3.11232 17.2475 3.33333V16.6667C17.2475 16.8877 17.1649 17.0996 17.0179 17.2559C16.8709 17.4122 16.6714 17.5 16.4635 17.5H2.35046C2.14252 17.5 1.94309 17.4122 1.79605 17.2559C1.64901 17.0996 1.56641 16.8877 1.56641 16.6667V3.33333C1.56641 3.11232 1.64901 2.90036 1.79605 2.74408C1.94309 2.5878 2.14252 2.5 2.35046 2.5V2.5ZM15.6794 6.03167L9.46342 11.9483L3.13452 6.01333V15.8333H15.6794V6.03167ZM3.53517 4.16667L9.4548 9.71833L15.289 4.16667H3.53517Z"
                fill="#8181AC"
              />
            </svg>
          </div>
          <input
            className="h-full bg-white border-0 rounded-[100px] mb-0 px-0 lg:text-[20px] lg:px-[25px] text-secondary focus:border-transparent focus:outline-none"
            maxLength={100}
            name="email"
            placeholder={t("email") + " ..."}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <input
          type="submit"
          className="hidden lg:block bg-yellow-600 dark:bg-blue-500 hover:bg-orange rounded-[32px] py-3 px-10 text-[18px] font-medium cursor-pointer transition-all transform duration-300 ease-linear"
          value={t("getOurUpdates")}
        />
        {/* Success message */}
        {isSubmitted && (
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-500 text-white p-4 rounded z-[9999]">
            Subscriber Added
          </div>
        )}
      </form>
      <input
        type="submit"
        className="block lg:hidden -mt-5 bg-yellow-600 dark:bg-blue-500 hover:bg-orange rounded-[32px] py-2 px-10 text-[18px] font-medium cursor-pointer transition-all transform duration-300 ease-linear"
        value={t("getOurUpdates")}
      />
    </>
  );
};

export default SubscribtionForm;
