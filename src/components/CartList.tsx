"use client";

import Image from "next/image";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import RemoveProductButton from "./RemoveProductButton";
import ClearCartButton from "./ClearCartButton";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useCartOptimistic } from "../hooks/useCartOptimistic";
import CheckoutButton from "./CheckoutButton";

const CartList = () => {
  const { optimistic } = useCartOptimistic();

  const cardsData = optimistic.products;
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <div className="w-full py-5 px-5 max-w-[1400px] mx-auto my-10 lg:py-10 lg:px-0 ">
      {cardsData?.length > 0 ? (
        <h2 className={`text-[40px] leading-[25px] text-center `}>
          {t("cart")}
        </h2>
      ) : (
        ""
      )}
      {cardsData?.length > 0 ? (
        <div className="w-[90%] lg:w-4/5 flex flex-col mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10 mx-auto overflow-x-auto">
          <table className="min-w-[700px]">
            <thead className="[&>tr>th]:pb-3">
              <tr className="[&>th]:text-start ">
                <th>{t("image")}</th>
                <th>{t("title")}</th>
                <th>{t("category")}</th>
                <th>{t("price")}</th>
                <th>{t("quantity")}</th>
                <th className="flex justify-center">
                  <ClearCartButton />
                </th>
              </tr>
            </thead>
            <tbody className="[&>tr>td]:p-2 ">
              {cardsData.map((product: ProductElement) => (
                <tr key={product.id}>
                  <td>
                    <div className="w-full max-h-[100px] lg:max-h-[150px] overflow-hidden">
                      <Link href={`/${locale}/products/${product.id}`}>
                        <Image
                          className="w-auto object-cover object-center"
                          src={product.image}
                          alt={product.title}
                          width={100}
                          height={100}
                        />
                      </Link>
                    </div>
                  </td>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td>{product.price} $</td>

                  <td>
                    <p className="flex gap-3 items-center">
                      <DecrementButton item={product} />
                      <span className="w-4 text-center text-xl">
                        {product.quantity}
                      </span>
                      <IncrementButton item={product} />
                    </p>
                  </td>
                  <td className="text-center">
                    <RemoveProductButton item={product} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full min-w-[700px] flex flex-col border-t-2 border-blue-500 items-end gap-2 *:text-[15px] lg:*:text-[20px]">
            <div className="flex flex-col gap-2 w-1/4 border-2 border-t-0 border-blue-500 p-4 rounded-b-md">
              <div className="flex gap-6 ">
                <p className="w-[150px]">{t("total-items")}</p>
                <p className="w-[100px]">{optimistic?.count}</p>
              </div>
              <div className="flex gap-6 ">
                <p className="w-[150px]">{t("total-price")}</p>
                <p className="w-[100px]">{optimistic?.price} $</p>
              </div>
              <div className="flex w-full justify-center mt-2">
                <CheckoutButton cardsData={cardsData} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-[25px] lg:mt-[65px] flex justify-center text-[20px] lg:text-[25px]">
          {t("cart-is-empty")}
        </div>
      )}
    </div>
  );
};

export default CartList;
