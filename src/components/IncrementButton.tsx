"use client";
import { addToCartAction } from "../app/actions";

const IncrementButton = ({ id }: { id: number }) => {
  return (
    <button
      className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
      onClick={() => addToCartAction(id)}
    >
      +
    </button>
  );
}

export default IncrementButton;