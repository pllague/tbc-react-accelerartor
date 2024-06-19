"use client";
import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import { uploadUserPicture } from "../app/api";
import LoadingAnimation from "./LoadingAnimation";
import { useTranslations } from "next-intl";

const AvatarUpload = ({ userImage }: { userImage: string }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const { user } = useUser();
  const [loader, setLoader] = useState(false);
  const [pickedImage, setPickedImage] = useState<any>(null);
  const t = useTranslations("Index");

  const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
  const maxFileSize = 1 * 1024 * 1024; // 1MB file

  useEffect(() => {
    setLoader(true);
    const updateUser = async () => {
      if (!blob || !user) return;
      try {
        setLoader(true);
        const response = await uploadUserPicture(blob.url, user.sub!);

        if (!response.ok) {
          console.error("Failed to update user picture");
        } else {
          setLoader(false);
        }
      } catch (error) {
        console.error("Error updating user picture:", error);
      }
    };
    setLoader(false);
    updateUser();
  }, [blob, user]);

  function handleClick() {
    inputFileRef.current?.click();
  }

  // Adding an Image Preview to the Picker
  function handleImageChange(e: any) {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    // Restrect to upload non image type files
    if (!validImageTypes.includes(file.type)) {
      alert("Please upload a valid image file (jpg, png, gif).");
      e.target.value = "";
      return;
    }

    // Don't give a possibility to upload image more then 1 MB
    if (file.size > maxFileSize) {
      alert("File size exceeds 1MB. Please upload a smaller image.");
      e.target.value = "";
      return;
    }

    // file reader
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  let imageSrc: string;
  if (pickedImage) {
    imageSrc = pickedImage;
  } else if (blob) {
    imageSrc = blob.url;
  } else {
    imageSrc = userImage;
  }

  return (
    <div className=" h-full flex flex-col justify-start items-start gap-6">
      <div className="relative group w-[150px] h-[150px] rounded-full overflow-hidden ">
        {loader && <LoadingAnimation />}
        <Image
          src={imageSrc}
          priority={true}
          alt="user avatar"
          className="h-auto "
          width={150}
          height={150}
        />
        <div className="absolute top-0 left-0 w-full h-full hidden group-hover:block bg-black/75 transform transition-all duration-300 ease-linear">
          <svg
            onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 cursor-pointer stroke-white hover:stroke-orange transition-all duration-300 ease-linear"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
            />
          </svg>
        </div>

        <input
          onChange={handleImageChange}
          className="text-[10px] hidden"
          name="file"
          ref={inputFileRef}
          type="file"
          id="files"
          accept="image/*"
          required
        />
      </div>
      <form
        className="w-full flex flex-col justify-center items-center gap-3"
        onSubmit={async (event) => {
          event.preventDefault();
          setLoader(true);
          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];

          const response = await fetch(
            `/api/avatar/upload?filename=${file.name}`,
            {
              method: "POST",
              body: file,
            }
          );

          const newBlob = (await response.json()) as PutBlobResult;

          setBlob(newBlob);
          if (inputFileRef.current) {
            inputFileRef.current.value = "";
          }
        }}
      >
        {inputFileRef?.current?.files?.length! > 0 && (
          <button
            className="bg-blue-500 w-fit text-white py-2 px-4 text-[16px] rounded-[5px] hover:bg-orange transition-all transform duration-300 ease-linear "
            type="submit"
          >
            {t("upload")}
          </button>
        )}
      </form>
    </div>
  );
};

export default AvatarUpload;
