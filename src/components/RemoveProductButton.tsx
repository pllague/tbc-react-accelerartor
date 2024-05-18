"use client";
import { removeProductFromCartAction } from "../app/actions";

const RemoveProductButton = ({ id }: { id: number }) => {
  return (
    <button
      className="text-3xl text-red-700 hover:text-green-700 transition-all duration-300 ease-in-out"
      onClick={() => removeProductFromCartAction(id)}
    >
      X
    </button>
  );
};

export default RemoveProductButton;
