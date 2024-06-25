import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { getOrders } from "../../../api";
import { getSession } from "@auth0/nextjs-auth0";
import Orders from "../../../../components/Orders";
import Link from "next/link";

export const metadata = {
  title: "Classic Football Shirts - Orders",
  description: "Orders page",
};

const OrdersPage = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);

  const orders = await getOrders();
  const session = await getSession();
  const t = await getTranslations("Index");
  const user = session?.user;
  const sub = user?.sub;
  const isAdmin = Array.isArray(user?.role) && user.role.includes("Admin");
  const auth_user = {
    email: user?.email,
    userSub: sub,
    name: user?.name,
    role: isAdmin ? "admin" : "",
  };

  const userOrders = orders.filter((order: Order) => order.metadata.id === sub);

  return (
    <section className="py-[60px] dark:bg-gray">
      <div className="w-[75%] m-auto">
        <Link
          href={`/${locale}/admin`}
          className="w-fit group flex items-center gap-2 hover:text-orange transition-all transform duration-300 ease-linear text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 group-hover:stroke-orange transition-all transform duration-300 ease-linear text-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          {t("backToAdmin")}
        </Link>
        <Orders
          authUser={auth_user}
          userOrders={auth_user?.role == "admin" ? orders : userOrders}
        />
      </div>
    </section>
  );
};

export default OrdersPage;
