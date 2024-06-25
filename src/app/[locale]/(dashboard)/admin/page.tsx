import AllBlogsButton from "../../../../components/AllBlogsButton";
import AllContactsButton from "../../../../components/AllContactsButton";
import AllProductButton from "../../../../components/AllProductButton";
import AllSubscribersButton from "../../../../components/AllSubscribersButton";
import BlogCreateButton from "../../../../components/BlogCreateButton";
import ProductCreateButton from "../../../../components/ProductCreateButton";
import AllUsersButton from "../../../../components/AllUsersButton";
import Link from "next/link";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Classic Football Shirts - Admin",
  description: "Admin page",
};

const AdminPage = async () => {
  const locale = useLocale();
  const t = await getTranslations("Index");
  return (
    <div className="w-full h-full flex flex-col lg:p-10 gap-5">
      <ProductCreateButton />
      <AllProductButton />
      <BlogCreateButton />
      <AllBlogsButton />
      <AllContactsButton />
      <AllSubscribersButton />
      <AllUsersButton />
      <Link
        href={`/${locale}/orders`}
        className="w-[150px] lg:w-[200px] bg-blue-500 hover:bg-orange rounded-md py-3 font-small lg:font-medium  transition-all transform duration-300 ease-linear text-center"
      >
        {t("orders")}
      </Link>
    </div>
  );
};

export default AdminPage;
