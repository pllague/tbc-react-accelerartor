"use client";
// import { useRouter } from "next/navigation";
// import { addProductAction } from "../app/actions";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import DeleteProduct from "./DeleteProduct";
import LoadingAnimation from "./LoadingAnimation";
import ProductEditButton from "./ProductEditButton";
import Image from "next/image";
const AllProductList = ({
  setOpenModal,
}: {
  setOpenModal: (openModal: boolean) => void;
}) => {
  const [products, setProducts] = useState<productElement[]>([]);
  const t = useTranslations("Index");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_VERCEL_URL + "/api/get-products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data.products.rows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [products]);
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-secondary/80 z-[999]">
      {products.length === 0 ? (
        <LoadingAnimation />
      ) : (
        <div className="w-3/5 border-2 border-yellow-600 bg-[#E5E1CC] dark:bg-secondary dark:border-light_blue shadow-xl shadow-red-300 dark:shadow-light_blue p-8 rounded-xl flex flex-col gap-5 justify-start items-center [&>input]:bg-white h-[80%] max-h-[80%] overflow-x-auto overflow-y-auto">
          {products.length && (
            <div className="w-full px-2 flex justify-between">
              <div className="w-1/5 text-left">{t("image")}</div>
              <div className="w-1/5 text-left">{t("title")}</div>
              <div className="w-1/5 text-center">{t("price")}</div>
              <div className="w-1/5 text-center">{t("edit")}</div>
              <div className="w-1/5 text-center">{t("delete")}</div>
            </div>
          )}
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full px-2 flex justify-between items-center"
            >
              <div className="w-1/4 text-center">
                <Image
                  src={product.image}
                  alt="Current file"
                  width={100}
                  height={100}
                  className="w-[100px] h-auto rounded"
                />
              </div>
              <div className="w-1/4 text-left break-words">{product.title}</div>
              <div className="w-1/4 text-center break-words">
                {product.price}
              </div>
              <div className="w-1/4 text-center">
                <ProductEditButton product={product} />
              </div>
              <div className="w-1/4 text-center">
                <DeleteProduct id={product.id} />
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

export default AllProductList;
