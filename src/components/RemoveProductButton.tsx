"use client";
import { removeProductFromCartAction } from "../app/actions";
import { useTransition } from "react";
import { useCartOptimistic } from "../hooks/useCartOptimistic";

interface Props {
  item: ProductElement;
}

const RemoveProductButton = ({ item }: Props) => {
  const [, startTransition] = useTransition();
  const { optimistic, addOptimistic } = useCartOptimistic();

  const removeProductFromCart = async () => {
    startTransition(() => {
      const newCart = {
        count: optimistic.count - item.quantity!,
        price: optimistic.price - item.quantity! * item.price,
        products: optimistic.products.filter((p) => p.id !== item.id),
      };
      return addOptimistic(newCart);
    });
    await removeProductFromCartAction(item.id);
  };

  return (
    <button onClick={removeProductFromCart}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-8 h-8 stroke-red-700 hover:stroke-orange transition-all duration-300 ease-in-out"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default RemoveProductButton;
