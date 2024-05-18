"use client";
import { decrementProductQuantityAction } from "../app/actions";

const DecrementButton = ({ id }: { id: number }) => {
  return (
    <button
      className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
      onClick={() => decrementProductQuantityAction(id)}
    >
      -
    </button>
  );
};

export default DecrementButton;
