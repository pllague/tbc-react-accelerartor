import Image from "next/image";
import { useTranslations } from "next-intl";

const SubscribtionForm = () => {
  const t = useTranslations("Index");

  return (
    <>
      <form className="flex flex-col lg:flex-row h-[50px] lg:h-[65px] bg-white rounded-[100px] items-center p-[5px] ">
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
            required
          />
        </div>
        <input
          type="submit"
          className="hidden lg:block bg-yellow-600 dark:bg-blue-500 hover:bg-orange rounded-[32px] py-3 px-10 text-[18px] font-medium cursor-pointer transition-all transform duration-300 ease-linear"
          value={t("getOurUpdates")}
        />
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
