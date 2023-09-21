"use client";
import React, { useEffect, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import OrdersSmallScreenView from "../../Admin/Orders/OrdersSmallScreenView";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Image from "next/image";
import OrderCancelSmallView from "./OrderCancelSmallView";
import getUserData from "@/data/getUserData";
import getMyOrders from "@/utils/users/getMyOrders";

const CanceledOrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const user = getUserData();

  useEffect(() => {
    if (user) {
      (async () => {
        const data = await getMyOrders(user?._id);
        setOrders(data);
      })();
    } else {
      setOrders([]);
    }
  }, [user?._id]);
  
  useState(() => {
    const canceledOrders = orders.filter((order) => order?.orderStatus === "canceled");
    setOrders(canceledOrders);
  }, []);
  return (
    <div
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      className="overflow-x-auto mt-10 border dark:text-white rounded-xl p-4 shadow mb-5"
    >
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full border-collapse ">
          <thead>
            <tr className="border-b border-gray-300 text-green-500 w-full">
              <th className=" px-4 py-4 text-center"># ORDER</th>
              <th className=" px-4 py-4 text-center">ORDER DATE</th>
              <th className=" px-4 py-4 text-center">PRODUCT</th>
              <th className=" px-4 py-4 text-center">ORDER STATUS</th>
              <th className=" px-4 py-4 text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-300 w-full">
                <td className=" px-4 py-4 text-center text-green-500">
                  {order.orderNumber}
                </td>
                <td className=" px-4 py-4 text-center text-sm text-green-500">
                  {order.orderDate}
                </td>
                <td className=" px-4 py-4 text-center flex gap-2 items-center justify-center">
                  <div className="h-10 w-10 overflow-hidden object-contain rounded">
                    <Image
                      className="w-full object-contain"
                      src={order.productImage}
                      alt="product image"
                      width={64}
                      height={64}
                    />
                  </div>
                  <span>{order.productName}</span>
                </td>
                <td className=" px-4 py-4 text-center text-sm">
                  {order.status === "confirmed" ? (
                    <span className="py-1.5 px-4 rounded-full bg-[#00BA9D] font-medium text-white">
                      Confirmed
                    </span>
                  ) : order.status === "canceled" ? (
                    <span className="py-1.5 px-4 rounded-full bg-gray-400 text-white font-medium">
                      Cancelled
                    </span>
                  ) : order.status === "completed" ? (
                    <span className="py-1.5 px-4 rounded-full bg-[#035ECF] text-white font-medium">
                      Completed
                    </span>
                  ) : (
                    <span>No data</span>
                  )}
                </td>
                
                <td className=" px-4 py-4 text-center">
                  <span className="py-1 px-3  bg-gray-200 dark:text-neutral-900 font-semibold  rounded-full">More Details</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <OrderCancelSmallView orders={orders} />
    </div>
  );
};

export default CanceledOrdersTable;
