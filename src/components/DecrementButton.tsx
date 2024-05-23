"use client";
import { decrementProductQuantityAction } from "../app/actions";
import { useTransition } from "react";
import { useCartOptimistic } from "../hooks/useCartOptimistic";

interface Props {
  item: productElement;
}

const DecrementButton = ({ item }: Props) => {
  const [, startTransition] = useTransition();
  const { optimistic, addOptimistic } = useCartOptimistic();

  const decrementProductQuantity = async () => {
    startTransition(() => {
      const newProducts =
        item.quantity! <= 1
          ? optimistic.products.filter((p) => p.id !== item.id)
          : optimistic.products.map((p) =>
              p.id === item.id ? { ...p, quantity: p.quantity! - 1 } : { ...p }
            );

      return addOptimistic({
        count: optimistic.count - 1,
        price: optimistic.price - item.price,
        products: newProducts,
      });
    });
    await decrementProductQuantityAction(item.id);
  };

  return (
    <button
      className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
      onClick={decrementProductQuantity}
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
          d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  );
};

export default DecrementButton;
