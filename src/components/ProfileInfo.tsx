"use client";
import { editProfileInfo } from "../app/actions";
import { useState } from "react";

export default function ProfileInfo({ user }: { user: any }) {
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [editProfileMessage, setEditProfileMessage] = useState(false);
  const userSub = user.sub;

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
    <form className="text-gray-700 flex flex-col" onSubmit={handleSubmit}>
      {name && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-lg leading-6 h-8"
        />
      )}
      {nickname && (
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="text-lg leading-6 h-8"
        />
      )}
      {email && (
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-lg leading-6 h-8 opacity-50"
          readOnly
        />
      )}
      {editProfileMessage && <p>განახლდაა</p>}
      <button type="submit" className="text-lg leading-6 h-8 mt-4">
        Submit
      </button>
    </form>
  );
}
