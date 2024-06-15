"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { addContactAction } from "../app/actions";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [formContact, setFormContact] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    comment: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const t = useTranslations("Index");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addContactAction(formContact);
      setIsSubmitted(true);
      setFormContact({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        comment: "",
      });
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
        className="w-1/3 flex flex-col gap-3 justify-between items-start mx-auto [&>div>input]:bg-white"
      >
        <div className="w-full flex gap-3 justify-between">
          <input
            className="w-2/5 h-full border-2 border-yellow-600 dark:border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
            maxLength={100}
            name="firstName"
            placeholder={t("firstname")}
            type="text"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            value={formContact.firstName}
            onChange={(e) =>
              setFormContact((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            required
          />
          <input
            className="w-3/5 h-full border-2 border-yellow-600 dark:border-light_blue  py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
            maxLength={100}
            name="lastName"
            placeholder={t("lastname")}
            type="text"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            value={formContact.lastName}
            onChange={(e) =>
              setFormContact((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            required
          />
        </div>
        <div className="w-full flex gap-3 justify-between">
          <input
            className="w-2/5 h-full border-2 border-yellow-600 dark:border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
            maxLength={100}
            name="mobile"
            placeholder={t("mobile")}
            type="text"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            value={formContact.mobile}
            onChange={(e) =>
              setFormContact((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            required
          />
          <input
            className="w-3/5 h-full border-2 border-yellow-600 dark:border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
            maxLength={100}
            name="email"
            placeholder={t("email")}
            type="text"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            value={formContact.email}
            onChange={(e) =>
              setFormContact((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            required
          />
        </div>
        <textarea
          className="w-full h-[75px] lg:h-[150px] border-2 border-light_blue p-3 bg-white text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
          placeholder="Add your comment ..."
          name="comment"
          value={formContact.comment}
          onChange={(e) =>
            setFormContact((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          required
        />
        <button
          className="w-full h-full border-0 bg-blue-500 py-3 mx-auto text-white lg:text-[20px] rounded-[5px] hover:bg-orange transition-all transform duration-300 ease-linear"
          type="submit"
        >
          {t("submit")}
        </button>
      </form>
      {/* Success message */}
      {isSubmitted && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded z-[9999]">
          Submited Successfully
        </div>
      )}
    </>
  );
};

export default ContactForm;
