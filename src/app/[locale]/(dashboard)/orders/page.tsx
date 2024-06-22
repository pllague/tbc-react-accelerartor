import { unstable_setRequestLocale } from "next-intl/server";
import { getOrders } from "../../../api";
import { getSession } from "@auth0/nextjs-auth0";
import Orders from "../../../../components/Orders";

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
      <div className="max-w-[1140px] m-auto">
        <Orders
          authUser={auth_user}
          userOrders={auth_user?.role == "admin" ? orders : userOrders}
        />
      </div>
    </section>
  );
};

export default OrdersPage;
