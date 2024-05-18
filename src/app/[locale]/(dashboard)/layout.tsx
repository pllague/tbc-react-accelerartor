import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const DashboardLayout: React.FC<childrenProps> = async ({ children }) => {
  const messages = await getMessages();
  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <Header />
        <main>{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </>
  );
};

export default DashboardLayout;
