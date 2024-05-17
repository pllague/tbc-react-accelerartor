// "use client";
"use server";
// import { useEffect, useState, useReducer } from "react";
// import { useLocalStorage } from "../../../../hooks/hooks";
import { useLocale } from "next-intl";
import Image from "next/image";
import { getCart } from "../../../api";
import { addToCartAction } from "../../../actions";
import IncrementButton from "../../../../components/IncrementButton";
// import { reducer } from "../../../../helpers";

const CheckoutPage = async () => {
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);
  // const [cardsData, setCachedValue] = useLocalStorage("selectedProducts", []);

  const locale = useLocale();

  const cartElements = await getCart();
  const cardsData = cartElements[0]?.products;
  // console.log(cardsData);

  // const [SelectedProducts, dispatch] = useReducer(reducer, cardsData);

  // useEffect(() => {
  //   setCachedValue(SelectedProducts);
  // }, [SelectedProducts, setCachedValue]);

  // const handleQuantityChange = (
  //   action: "INCREMENT" | "DECREMENT" | "REMOVE",
  //   card: productElement
  // ) => {
  //   dispatch({ type: action, payload: card });
  // };

  // const handleProductRemove = (action: "RESET") => {
  //   dispatch({ type: action });
  // };

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
                  <button
                    className={
                      " bg-yellow-600 dark:bg-blue-500 hover:bg-orange rounded-[100px] py-2 lg:py-auto px-7 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear" +
                      (locale === "ka" ? " lg:text-[16px]" : " lg:text-[18px]")
                    }
                    // onClick={() => handleProductRemove("RESET")}
                  >
                    {locale === "en" ? "Clear" : "გასუფთავება"}
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {cardsData.map((product: { id: number; quantity: number }) => (
                <tr key={product.id}>
                  <td>
                    <div className="w-full max-h-[100px] lg:max-h-[150px] overflow-hidden">
                      {/* <Image
                        className="w-auto object-cover object-center"
                        src={product.selectedCard.thumbnail}
                        alt={product.selectedCard.title}
                        width={100}
                        height={100}
                      /> */}
                    </div>
                  </td>
                  {/* <td>{product.selectedCard.title}</td>
                  <td>{product.selectedCard.category}</td>
                  <td>{product.selectedCard.price} €</td> */}
                  <td></td>
                  <td>{product.id}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <div className="flex gap-3 items-center">
                      <button
                        className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
                        // onClick={() =>
                        //   handleQuantityChange(
                        //     "DECREMENT",
                        //     product.selectedCard
                        //   )
                        // }
                      >
                        -
                      </button>
                      <span className="text-2xl">{product.quantity}</span>
                      {/* <button
                        className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
                        onClick={() =>
                          handleQuantityChange(
                            "INCREMENT",
                            product.selectedCard
                          )
                        }
                      >
                        +
                      </button> */}
                      <IncrementButton id={product.id} />
                    </div>
                  </td>
                  <td className="text-center">
                    <button
                      className="text-3xl text-red-700 hover:text-green-700 transition-all duration-300 ease-in-out"
                      // onClick={() =>
                      //   handleQuantityChange("REMOVE", product.selectedCard)
                      // }
                    >
                      X
                    </button>
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

      {/* {isMounted && cardsData.length > 0 ? (
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
      {isMounted && cardsData.length > 0 ? (
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
                  <button
                    className={
                      " bg-yellow-600 dark:bg-blue-500 hover:bg-orange rounded-[100px] py-2 lg:py-auto px-7 font-small lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear" +
                      (locale === "ka" ? " lg:text-[16px]" : " lg:text-[18px]")
                    }
                    onClick={() => handleProductRemove("RESET")}
                  >
                    {locale === "en" ? "Clear" : "გასუფთავება"}
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {cardsData.map((product: SelectedProduct) => (
                <tr key={product.id}>
                  <td>
                    <div className="w-full max-h-[100px] lg:max-h-[150px] overflow-hidden">
                      <Image
                        className="w-auto object-cover object-center"
                        src={product.selectedCard.thumbnail}
                        alt={product.selectedCard.title}
                        width={100}
                        height={100}
                      />
                    </div>
                  </td>
                  <td>{product.selectedCard.title}</td>
                  <td>{product.selectedCard.category}</td>
                  <td>{product.selectedCard.price} €</td>
                  <td>
                    <div className="flex gap-3 items-center">
                      <button
                        className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
                        onClick={() =>
                          handleQuantityChange(
                            "DECREMENT",
                            product.selectedCard
                          )
                        }
                      >
                        -
                      </button>
                      <span className="text-2xl">{product.count}</span>
                      <button
                        className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
                        onClick={() =>
                          handleQuantityChange(
                            "INCREMENT",
                            product.selectedCard
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-center">
                    <button
                      className="text-3xl text-red-700 hover:text-green-700 transition-all duration-300 ease-in-out"
                      onClick={() =>
                        handleQuantityChange("REMOVE", product.selectedCard)
                      }
                    >
                      X
                    </button>
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
      )} */}
    </div>
  );
};

export default CheckoutPage;
