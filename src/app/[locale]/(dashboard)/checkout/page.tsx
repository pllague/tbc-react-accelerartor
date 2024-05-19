import { getDetailedCart } from "../../../api";
import CartList from "../../../../components/CartList";

const CheckoutPage = async () => {
  const cartElements = await getDetailedCart();

  return (
    <CartList cartElements={cartElements} />
  );
};

export default CheckoutPage;
