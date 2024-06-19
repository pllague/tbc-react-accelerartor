"use client";

import { useTranslations } from "next-intl";
// import { AuthUser, Order } from "../../types/profile-types";
import { createRefundAction } from "../app/actions";
import { useState } from "react";
import EmptyOrders from "./EmptyOrders";
import LoadingAnimation from "./LoadingAnimation";

const Orders = ({
  userOrders,
  authUser,
}: {
  userOrders: Order[];
  authUser: ProfileData;
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedChargeId, setSelectedChargeId] = useState<string | null>(null);
  const t = useTranslations("Index");

  const refundHandler = async () => {
    if (selectedChargeId) {
      setLoading(true);
      await createRefundAction(selectedChargeId);
      setModalIsOpen(false);
      setLoading(false);
      setSelectedChargeId(null);
    }
  };

  const isClose = () => {
    document.body.style.overflow = "unset";
    setModalIsOpen(false);
    setSelectedChargeId(null);
  };

  const isOpen = (chargeId: string) => {
    document.body.style.overflow = "hidden";
    setModalIsOpen(true);
    setSelectedChargeId(chargeId);
  };
  return (
    <div className="py-4 m-auto w-full max-w-5xl">
      <div className="p-4 flex gap-8 flex-col lg:flex-row lg:items-start items-center">
        <div
          className={
            userOrders.length
              ? `m-auto grid grid-cols-1 lg:grid-cols-3 gap-8`
              : `w-full flex justify-center`
          }
        >
          {userOrders.length ? (
            userOrders.map((order) => (
              <div
                key={order.latest_charge.id}
                className="flex flex-col gap-5 p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <div className="font-semibold text-black">
                  {`${t("client")}: ${
                    order.latest_charge.billing_details.email
                  }`}
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-xl font-semibold text-black">
                      price
                      <span className="text-black">
                        ${(order.amount / 100).toFixed(2)}
                      </span>
                    </p>
                    <p className="text-sm text-gray-500">
                      currency: {order.currency.toUpperCase()}
                    </p>
                  </div>
                  <a
                    href={order.latest_charge.receipt_url}
                    aria-label="Order Receipt"
                    target="_blank"
                    className="text-black underline"
                  >
                    Invoice
                  </a>
                </div>
                <div className="space-y-2 flex flex-col justify-between ">
                  <p className="text-gray-700">
                    address: {order.metadata.address}
                  </p>
                  <p className="text-gray-700">city: {order.metadata.city}</p>
                  <p className="text-gray-700">phone: {order.metadata.phone}</p>
                  <p className="text-gray-700">
                    status:
                    <span
                      className={`font-bold ${
                        order.latest_charge.refunded === true
                          ? "text-gray-500"
                          : "text-green-500"
                      }`}
                    >
                      {order.latest_charge.refunded === true
                        ? "refunded"
                        : "paid"}
                    </span>
                  </p>
                </div>
                {authUser.role === "admin" &&
                  order.latest_charge.refunded === false && (
                    <button
                      onClick={() => isOpen(order.latest_charge.id)}
                      type="button"
                      className="p-1 px-[25px] border border-solid border-red text-[18px] text-black font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 bg-red hover:bg-lightred w-[150px]"
                    >
                      refund
                    </button>
                  )}
              </div>
            ))
          ) : (
            <EmptyOrders />
          )}
          <div>
            {modalIsOpen && (
              <div
                onClick={isClose}
                className="fixed inset-0 z-30 bg-black bg-opacity-80 flex items-center justify-center"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-50 p-8 border border-red rounded-xl bg-red dark:bg-gray dark:border-black mx-2"
                >
                  <div className="flex items-center flex-col justify-center">
                    <h2 className="text-white tracking-widest mb-6 dark:text-white text-center max-w-[400px]">
                      Modal Text
                    </h2>
                    {loading ? (
                      <LoadingAnimation />
                    ) : (
                      <div className="flex gap-2 mt-6">
                        <button
                          type="button"
                          onClick={refundHandler}
                          className="p-2 px-6 text-lg bg-white text-red dark:text-black font-medium align-middle duration-300 uppercase flex items-center gap-2 w-[100px] justify-center"
                        >
                          yes
                        </button>
                        <button
                          type="button"
                          onClick={isClose}
                          className="p-2 px-6 text-lg bg-white text-red dark:text-black font-medium align-middle duration-300 uppercase flex items-center gap-2 w-[100px] justify-center"
                        >
                          no
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
