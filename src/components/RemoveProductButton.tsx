"use client";
import { removeProductFromCartAction } from "../app/actions";
import { useTransition } from "react";

interface Props {
  item: productElement,
  optimistic: CartWithProducts,
  addOptimistic: (action: CartWithProducts) => void,
}

const RemoveProductButton = ({ item, optimistic, addOptimistic }: Props) => {
  const [, startTransition] = useTransition();

  const removeProductFromCart = async () => {
    startTransition(() => {
      const newCart = {
        count: optimistic.count - item.quantity!,
        price: optimistic.price - item.quantity! * item.price,
        products: optimistic.products.filter(p => p.id !== item.id),
      }
      return addOptimistic(newCart);
    })
    await removeProductFromCartAction(item.id)
  }

  return (
    <button
      className="text-3xl text-red-700 hover:text-orange transition-all duration-300 ease-in-out"
      onClick={removeProductFromCart}
    >
      X
    </button>
  );
};

export default RemoveProductButton;
