import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { CartOptimisticContextProvider } from "../../../providers/CartOptimisticProvider";
import { getDetailedCart } from "../../api";

const DashboardLayout: React.FC<childrenProps> = async ({ children }) => {
  const messages = await getMessages();
  const cart = await getDetailedCart();
  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <CartOptimisticContextProvider cart={cart}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartOptimisticContextProvider>
      </NextIntlClientProvider>
    </>
  );
};

export default DashboardLayout;
