"use client";
import { editProfileInfo } from "../app/actions";
import { useState } from "react";
import { useTranslations } from "next-intl";
interface UserInfoDb {
  name: string;
  email: string;
  sub: string;
  image_url: string;
}

export default function ProfileInfo({ user }: { user: UserInfoDb }) {
  const t = useTranslations("Index");
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [editProfileMessage, setEditProfileMessage] = useState(false);
  const userSub = user?.sub;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: ProfileData = {
      name,
      email,
      userSub,
    };
    try {
      await editProfileInfo(formData);
      setEditProfileMessage(true);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      {name && (
        <div className="flex gap-1">
          <label htmlFor="profileInfoName">{t("full-name")}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-md leading-6 "
            id="profileInfoName"
          />
        </div>
      )}
      {email && (
        <div className="flex gap-1">
          <label htmlFor="profileInfoEmail">{t("email")}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-md leading-6 "
            id="profileInfoEmail"
          />
        </div>
      )}
      {editProfileMessage && <p>Profile updated</p>}
      <button type="submit" className="text-lg leading-6 h-8 mt-4">
        {t("submit")}
      </button>
    </form>
  );
}
