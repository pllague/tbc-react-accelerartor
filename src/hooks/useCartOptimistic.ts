import { useContext } from "react";
import { CartOptimisticContext } from "../providers/CartOptimisticProvider";

export function useCartOptimistic() {
  const context = useContext(CartOptimisticContext);

  return context;
}