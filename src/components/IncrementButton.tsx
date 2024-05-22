"use client";
import { addToCartAction } from "../app/actions";
import { useTransition } from "react";
import { useCartOptimistic } from "../hooks/useCartOptimistic";

interface Props {
  item: productElement;
}

const IncrementButton = ({ item }: Props) => {
  const [, startTransition] = useTransition();

  const { optimistic, addOptimistic } = useCartOptimistic();

  const addToCart = async () => {
    if (addOptimistic && optimistic) {
      startTransition(() => {
        const newCart = {
          count: optimistic.count + 1,
          price: optimistic.price + item.price,
          products: optimistic.products.map((p) =>
            p.id === item.id ? { ...p, quantity: p.quantity! + 1 } : { ...p }
          ),
        };
        return addOptimistic(newCart);
      });
    }
    await addToCartAction(item.id);
  };

  return (
    <button
      className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
      onClick={addToCart}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  );
};

export default IncrementButton;
