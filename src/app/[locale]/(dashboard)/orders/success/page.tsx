import { unstable_setRequestLocale } from "next-intl/server";
import SuccessOrder from "../../../../../components/SuccessOrder";

export const metadata = {
  title: "Liquor store - Success",
  description: "Succsess page",
};

export default async function Success({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <SuccessOrder />;
}
