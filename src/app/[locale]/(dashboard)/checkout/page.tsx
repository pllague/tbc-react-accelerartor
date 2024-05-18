"use server";
import { useLocale } from "next-intl";
import Image from "next/image";
import { getDetailedCart } from "../../../api";
import IncrementButton from "../../../../components/IncrementButton";
import DecrementButton from "../../../../components/DecrementButton";
import RemoveProductButton from "../../../../components/RemoveProductButton";
import ClearCartButton from "../../../../components/ClearCartButton";

const CheckoutPage = async () => {
  const locale = useLocale();

  const cartElements = await getDetailedCart();
  const cardsData = cartElements.products;

  return (
    <div className="w-full py-5 px-5 max-w-[1400px] mx-auto my-10 lg:py-10 lg:px-0 ">
      {cardsData.length > 0 ? (
        <h2
          className={`text-[40px] leading-[25px] text-center ${
            cardsData.length < 3 ? "lg:-mt-[200px]" : ""
          } ${cardsData.length < 2 ? "-mt-[50px]" : ""}`}
        >
          {locale === "en" ? "Cart" : "კალათა"}
        </h2>
      ) : (
        ""
      )}
      {cardsData.length > 0 ? (
        <div className="w-full lg:w-4/5 flex flex-col mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10 mx-auto">
          <table className="border-separate border-spacing-3">
            <thead>
              <tr className="[&>th]:text-start">
                <th>{locale === "en" ? "Poduct Image" : "პროდუქტის სურათი"}</th>
                <th>
                  {locale === "en" ? "Poduct Title" : "პროდუქტის დასახელება"}
                </th>
                <th>{locale === "en" ? "Category" : "კატეგორია"}</th>
                <th>{locale === "en" ? "Price" : "ფასი"}</th>
                <th>{locale === "en" ? "Quantity" : "რაოდენობა"}</th>
                <th className="flex justify-center">
                  <ClearCartButton />
                </th>
              </tr>
            </thead>
            <tbody>
              {cardsData.map((product: productElement) => (
                <tr key={product.id}>
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
                    <div className="flex gap-3 items-center">
                      <DecrementButton id={product.id} />
                      <span className="text-2xl">{product.quantity}</span>
                      <IncrementButton id={product.id} />
                    </div>
                  </td>
                  <td className="text-center">
                    <RemoveProductButton id={product.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-[25px] lg:mt-[65px] flex justify-center text-[20px] lg:text-[25px]">
          {locale === "en" ? "Cart is empty" : "კალათა ცარიელია"}
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;