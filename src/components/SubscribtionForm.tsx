"use client";
import Image from "next/image";
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
            <Image
              src="/assets/icons/email-icon.svg"
              alt="Email icon"
              width={24}
              height={24}
            />
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
