"use server";
import Image from "next/image";
import { getDetailedCart } from "../../../api";
import IncrementButton from "../../../../components/IncrementButton";
import DecrementButton from "../../../../components/DecrementButton";
import RemoveProductButton from "../../../../components/RemoveProductButton";
import ClearCartButton from "../../../../components/ClearCartButton";
import { getTranslations } from "next-intl/server";

const CheckoutPage = async () => {
  const t = await getTranslations("Index");
  const cartElements = await getDetailedCart();
  const cardsData = cartElements.products;

  return (
    <div className="w-full py-5 px-5 max-w-[1400px] mx-auto my-10 lg:py-10 lg:px-0 ">
      {cardsData.length > 0 ? (
        <h2
          className={`text-[40px] leading-[25px] text-center ${
            cardsData.length < 2 ? "lg:-mt-[200px]" : ""
          } ${cardsData.length < 2 ? "-mt-[50px]" : ""}`}
        >
          {t("cart")}
        </h2>
      ) : (
        ""
      )}
      {cardsData.length > 0 ? (
        <div className="w-full lg:w-4/5 flex flex-col mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10 mx-auto">
          <table>
            <thead className="[&>tr>th]:pb-3">
              <tr className="[&>th]:text-start">
                <th>{t("product-image")}</th>
                <th>{t("product-title")}</th>
                <th>{t("category")}</th>
                <th>{t("price")}</th>
                <th>{t("quantity")}</th>
                <th className="flex justify-center">
                  <ClearCartButton />
                </th>
              </tr>
            </thead>
            <tbody className="[&>tr>td]:p-2 ">
              {cardsData.map((product: productElement, index: number) => (
                <tr
                  key={product.id}
                  className={`${
                    index === cardsData.length - 1 ? "[&>td>div]:pb-5" : ""
                  }`}
                >
                  <td>
                    <div className="w-full max-h-[100px] lg:max-h-[150px] overflow-hidden">
                      <Image
                        className="w-auto object-cover object-center"
                        src={product.thumbnail}
                        alt={product.title}
                        width={100}
                        height={100}
                      />
                    </div>
                  </td>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td>{product.price} €</td>

                  <td>
                    <p className="flex gap-3 items-center">
                      <DecrementButton id={product.id} />
                      <span className="text-xl">{product.quantity}</span>
                      <IncrementButton id={product.id} />
                    </p>
                  </td>
                  <td className="text-center">
                    <RemoveProductButton id={product.id} />
                  </td>
                </tr>
              ))}
              <tr className="mt-5 border-t-2 border-orange dark:border-light_blue ">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="text-[22px] font-bold ">{t("total")} :</td>
                <td className="text-[22px] font-bold text-center ">
                  {cartElements?.price} €
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-[25px] lg:mt-[65px] flex justify-center text-[20px] lg:text-[25px]">
          {t("cart-is-empty")}
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
