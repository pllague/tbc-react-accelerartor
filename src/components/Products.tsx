"use client";
import Card from "./Card";
import Cart from "./Cart";
import useDebounce from "../hooks/useDebounce";
import { useState, useEffect, useReducer } from "react";
import { useLocale } from "next-intl";

const initialState: SelectedProduct[] = [];

type Action =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET" };

function reducer(state: SelectedProduct[], action: Action) {
  switch (action.type) {
    case "INCREMENT": {
      const SelectedProductIdx = state.findIndex(
        (p) => p.id === action.payload
      );
      if (SelectedProductIdx === -1)
        return [...state, { id: action.payload, count: 1 }];
      const clone = [...state];
      const SelectedProduct = clone[SelectedProductIdx];
      const updatedSelectedProduct = {
        ...SelectedProduct,
        count: SelectedProduct.count + 1,
      };
      clone[SelectedProductIdx] = updatedSelectedProduct;
      return clone;
    }
    case "DECREMENT": {
      const SelectedProductIdx = state.findIndex(
        (p) => p.id === action.payload
      );
      if (SelectedProductIdx === -1)
        return [...state, { id: action.payload, count: 1 }];
      const clone = [...state];
      const SelectedProduct = clone[SelectedProductIdx];
      const updatedSelectedProduct = {
        ...SelectedProduct,
        count: SelectedProduct.count - 1,
      };
      clone[SelectedProductIdx] = updatedSelectedProduct;
      return clone;
    }
    case "RESET":
      return initialState;
  }
}

const Products = ({ isSorted = false, searchQuery = "" }) => {
  const locale = useLocale();

  const [cards, setCards] = useState<productElement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // await new Promise(resolve => setTimeout(resolve, 3000));
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

  let newCards = isSorted
    ? cards.slice().sort((a, b) => a.title.localeCompare(b.title))
    : cards;

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);
  // Filter by searchQuery
  newCards = newCards.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  const [SelectedProducts, dispatch] = useReducer(reducer, initialState);

  const handleClick = (card: productElement) => {
    dispatch({ type: "INCREMENT", payload: card.id });
  };

  const selectedNumber = SelectedProducts.reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);

  return (
    <section>
      {newCards.length === 0 ? (
        <p className="text-yellow-600 dark:text-light_blue text-[32px] text-center mt-[100px]">
          {locale === "en" ? "Loading..." : "იტვირთება..."}
        </p>
      ) : (
        <div className="w-full py-5 px-5 max-w-[1400px] mx-auto my-10 lg:py-10 lg:px-0 ">
          <div className="relative mb-[60px]">
            <h2 className="text-[40px] leading-[25px] text-center">
              {locale === "en" ? "Products" : "პროდუქტები"}
            </h2>
            <Cart
              className="group absolute top-0 right-[25px] lg:right-[40px] transform -translate-y-1/2 cursor-pointer "
              selectedNumber={selectedNumber}
            />
          </div>
          <div className="flex flex-wrap justify-center mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10">
            {newCards.map((card) => (
              <Card
                key={card.id}
                card={card}
                handleClick={() => handleClick(card)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
