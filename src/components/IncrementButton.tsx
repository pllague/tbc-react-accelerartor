"use client";
import { addToCartAction } from "../app/actions";
import { useTransition } from "react";

interface Props {
  item: productElement,
  optimistic: CartWithProducts,
  addOptimistic: (action: CartWithProducts) => void,
}

const IncrementButton = ({ item, optimistic, addOptimistic }: Props) => {
  const [, startTransition] = useTransition();

  const addToCart = async () => {
    startTransition(() => {
      const newCart = {
        count: optimistic.count + 1,
        price: optimistic.price + item.price,
        products: optimistic.products.map(p => p.id === item.id ? ({ ...p, quantity: p.quantity! + 1 }) : ({ ...p })),
      }
      return addOptimistic(newCart)
    })
    await addToCartAction(item.id);
  }

  return (
    <button
      className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
      onClick={addToCart}
    >
      +
    </button>
  );
}

export default IncrementButton;