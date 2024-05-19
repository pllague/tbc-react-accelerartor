"use client";
import { decrementProductQuantityAction } from "../app/actions";
import { useTransition } from "react";

interface Props {
  item: productElement,
  optimistic: CartWithProducts,
  addOptimistic: (action: CartWithProducts) => void,
}

const DecrementButton = ({ item, optimistic, addOptimistic }: Props) => {
  const [, startTransition] = useTransition();

  const decrementProductQuantity = async () => {
    startTransition(() => {
      const newProducts = item.quantity! <= 1 ?
        optimistic.products.filter(p => p.id !== item.id) :
        optimistic.products.map(p => p.id === item.id ? ({ ...p, quantity: p.quantity! - 1 }) : ({ ...p }));

      return addOptimistic({ count: optimistic.count - 1, price: optimistic.price - item.price, products: newProducts });
    })
    await decrementProductQuantityAction(item.id);
  }

  return (
    <button
      className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
      onClick={decrementProductQuantity}
    >
      -
    </button>
  );
};

export default DecrementButton;
