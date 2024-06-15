"use client";
import { useRouter } from "next/navigation";
import { addProductAction } from "../app/actions";
import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
const ProductCreateForm = ({
  setOpenModal,
}: {
  setOpenModal: (openModal: boolean) => void;
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image_url, setImage_url] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const t = useTranslations("Index");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productData: CreateProduct = {
      title,
      description,
      price,
      image_url,
      brand,
      category,
    };

    try {
      await addProductAction(productData);
      setIsSubmitted(true);
      setTimeout(() => {
        setOpenModal(false);
      }, 3000);
    } catch (error) {
      console.error("Error creating user:", error);
    }
    router.refresh();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      throw new Error("No file selected");
    }

    const file = e.target.files[0];

    try {
      const response = await fetch(
        `/api/product/image/upload?filename=${file.name}`,
        {
          method: "POST",
          body: file,
        }
      );

      const newBlob = await response.json();
      setImage_url(newBlob.url);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-secondary/80 z-[999]">
        <form
          onSubmit={handleSubmit}
          className="w-2/5 bg-[#E5E1CC] dark:bg-secondary shadow-xl shadow-white dark:shadow-black p-8 rounded-xl flex flex-col gap-5 justify-center items-center [&>input]:bg-white"
        >
          <div className="w-full [&>input]:bg-white">
            {image_url && (
              <div>
                <p>Current Image:</p>
                <Image
                  src={image_url}
                  alt="Current file"
                  width={100}
                  height={100}
                  className="w-[100px] h-auto rounded"
                />
              </div>
            )}
            <label
              htmlFor="product-main-image"
              className="text-secondary dark:text-white text-[16px] lg:text-[18px]"
            >
              {t("image")}
            </label>
            <input
              className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange cursor-pointer"
              name="file"
              ref={inputFileRef}
              type="file"
              id="product-main-image"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="w-full [&>input]:bg-white">
            <label className="text-secondary dark:text-white text-[16px] lg:text-[18px]">
              {t("category")}
            </label>
            <select
              className="w-full h-full bg-white border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value=""> - Select -</option>
              <option value="Shirt">Shirt</option>
              <option value="Shorts">Shorts</option>
            </select>
          </div>
          <input
            className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
            type="text"
            name="brand"
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
          <input
            className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <textarea
            className="w-full h-[75px] lg:h-[150px] bg-white border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-orange focus:outline-orange"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="w-full flex gap-3">
            <button
              onClick={() => setOpenModal(false)}
              className="w-full h-full border-0 bg-red-800 py-3 mx-auto text-white lg:text-[20px] rounded-[5px] hover:bg-orange transition-all transform duration-300 ease-linear"
            >
              Cancel
            </button>
            <button
              className="w-full h-full border-0 bg-yellow-600 dark:bg-blue-500 hover:bg-orange dark:hover:bg-orange rounded-[5px] py-3 lg:py-auto px-7 font-small lg:text-[20px] lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      {/* Success message */}
      {isSubmitted && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 rounded z-[9999]">
          {t("success-submition-for-products")}
        </div>
      )}
    </>
  );
};

export default ProductCreateForm;
