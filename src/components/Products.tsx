"use client";
import Card from "./Card";
// import Cart from "./Cart";
import { useDebounce } from "../hooks/hooks";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
// import { reducer } from "../helpers";
import { addToCartAction } from "../app/actions";
import LoadingAnimation from "./LoadingAnimation";

const Products = ({ isSorted = false, searchQuery = "" }) => {
  const locale = useLocale();

  const [cards, setCards] = useState<productElement[]>([]);

  // const [cachedValue, setCachedValue] = useLocalStorage("selectedProducts", []);

  // const [SelectedProducts, dispatch] = useReducer(reducer, cachedValue);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCards(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   setCachedValue(SelectedProducts);
  // }, [SelectedProducts, setCachedValue]);

  let newCards = isSorted
    ? cards.slice().sort((a, b) => a.title.localeCompare(b.title))
    : cards;

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);
  // Filter by searchQuery
  newCards = newCards.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  // const handleClick = (card: productElement) => {
  //   dispatch({ type: "INCREMENT", payload: card });
  // };

  // const selectedNumber = SelectedProducts.reduce((acc, curr) => {
  //   return acc + curr.count;
  // }, 0);

  return (
    <section>
      {cards.length === 0 ? (
        <LoadingAnimation />
      ) : (
        <div className="w-full py-5 px-5 max-w-[1400px] mx-auto my-10 lg:py-10 lg:px-0">
          {newCards.length === 0 ? (
            <div className="text-center text-xl mt-10">
              {locale === "en" ? "Product not found" : "პროდუქტი არ მოიძებნა"}
            </div>
          ) : (
            <>
              <div className="relative mb-[60px]">
                <h2 className="text-[40px] leading-[25px] text-center">
                  {locale === "en" ? "Products" : "პროდუქტები"}
                </h2>
              </div>
              <div className="flex flex-wrap justify-center mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10">
                {newCards.map((card) => (
                  <Card
                    key={card.id}
                    card={card}
                    handleClick={() => addToCartAction(card.id)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Products;
