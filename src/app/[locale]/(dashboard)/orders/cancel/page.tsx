import { unstable_setRequestLocale } from "next-intl/server";
import CancelOrder from "../../../../../components/CancelOrder";

export const metadata = {
  title: "Liquor store - Cancel",
  description: "Cancel page",
};

const Cancel = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return <CancelOrder />;
};

export default Cancel;
