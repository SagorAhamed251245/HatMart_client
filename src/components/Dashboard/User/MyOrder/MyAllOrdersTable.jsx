"use client";
import Image from "next/image";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import MyOrdersSmallScreenView from "./MyOrdersSmallScreenView";
import getUserData from "@/data/getUserData";
import { useEffect, useState } from "react";
import getMyOrders from "@/utils/users/getMyOrders";

const MyAllOrdersTable = () => {
  const [MyOrders, setOrders] = useState([]);
  const user = getUserData();
  console.log(
    "🚀 ~ file: MyAllOrdersTable.jsx:14 ~ MyAllOrdersTable ~ user:",
    user
  );
  useEffect(() => {
    (async () => {
      const data = await getMyOrders(user?._id);
      setOrders(data);
    })();
  }, [user?._id]);

  return (
    <div
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      className="overflow-x-auto mt-10 border rounded-xl p-4 shadow mb-5"
    >
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full border-collapse ">
          <thead>
            <tr className="border-b border-gray-300 text-green-500 w-full">
              <th className=" px-4 py-4 text-center"># ORDER</th>
              <th className=" px-4 py-4 text-center">PRODUCT</th>
              <th className=" px-4 py-4 text-center">PAYMENT</th>
              <th className=" px-4 py-4 text-center">PAYMENT STATUS</th>
              <th className=" px-4 py-4 text-center">ORDER STATUS</th>
            </tr>
          </thead>
          <tbody>
            {MyOrders?.map((order) => (
              <tr key={order?._id} className="border-b border-gray-300 w-full">
                <td className=" px-4 py-4 text-xs text-center text-green-500">
                  {order?._id}
                </td>
                <td className=" px-4 py-4 text-center flex gap-2 items-center justify-start">
                  <div className="h-10 w-10 overflow-hidden object-contain rounded">
                    <Image
                      className="w-full object-contain"
                      src={order?.productImage}
                      alt="product image"
                      width={64}
                      height={64}
                    />
                  </div>
                  <span>{order?.productName}</span>
                </td>

                <td className=" px-4 py-4 text-center">${order?.price}</td>
                <td className=" px-4 py-4 text-center text-sm">
                  {order?.paymentStatus === "approved" ? (
                    <span className="py-1.5 px-4 rounded-full bg-[#00ba3b] font-medium text-white">
                      Confirmed
                    </span>
                  ) : order?.paymentStatus === "canceled" ? (
                    <span className="py-1.5 px-4 rounded-full bg-[#FF5470] text-white font-medium">
                      Cancelled
                    </span>
                  ) : order?.paymentStatus === "completed" ? (
                    <span className="py-1.5 px-4 rounded-full bg-[#035ECF] text-white font-medium">
                      Completed
                    </span>
                  ) : order?.paymentStatus === "pending" ? (
                    <span className="py-1.5 px-4 rounded-full bg-[#a9b91e] text-white font-medium">
                      Pending
                    </span>
                  ) : (
                    <span>No data</span>
                  )}
                </td>
                {/*  */}
                <td className=" px-4 py-4 text-center text-sm">
                  {order?.orderStatus === "confirmed" ? (
                    <span className="py-1.5 px-4 rounded-full bg-[#00ba3b] font-medium text-white">
                      Confirmed
                    </span>
                  ) : order?.orderStatus === "canceled" ? (
                    <span className="py-1.5 px-4 rounded-full bg-[#FF5470] text-white font-medium">
                      Cancelled
                    </span>
                  ) : order?.orderStatus === "completed" ? (
                    <span className="py-1.5 px-4 rounded-full bg-[#035ECF] text-white font-medium">
                      Completed
                    </span>
                  ) : order?.orderStatus === "pending" ? (
                    <span className="py-1.5 px-4 rounded-full bg-[#a9b91e] text-white font-medium">
                      Pending
                    </span>
                  ) : (
                    <span>No data</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <MyOrdersSmallScreenView orders={MyOrders} />
    </div>
  );
};

export default MyAllOrdersTable;
