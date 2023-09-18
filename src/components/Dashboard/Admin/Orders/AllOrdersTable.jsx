import Image from "next/image";
import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import OrdersSmallScreenView from "./OrdersSmallScreenView";

const AllOrdersTable = ({ ordersData }) => {
  return (
    <div
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      className="overflow-x-auto mt-10 border rounded-xl p-4 dark:border-neutral-500 bg-transparent  shadow mb-5"
    >
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full border-collapse ">
          <thead>
            <tr className="border-b border-gray-300 text-green-500 w-full">
              <th className=" px-4 py-4 text-center"># ORDER</th>
              <th className=" px-4 py-4 text-center">PRODUCT</th>
              <th className=" px-4 py-4 text-center">CATEGORY</th>
              <th className=" px-4 py-4 text-center">QUANTITY</th>
              <th className=" px-4 py-4 text-center">PRICE</th>
              <th className=" px-4 py-4 text-center">ORDER STATUS</th>
              <th className=" px-4 py-4 text-center">ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {ordersData.map((order) => (
              <tr key={order.id} className="border-b border-gray-300 w-full">
                <td className=" px-4 py-4 text-center text-green-500 text-sm">
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
                  <span className="text-sm">
                    {order?.productName.slice(0, 18)}
                  </span>
                </td>
                <td className=" px-4 py-4 text-center">
                  {order?.productCategory}
                </td>
                <td className=" px-4 py-4 text-center">{order?.quantity}</td>
                <td className=" px-4 py-4 text-center">${order?.price}</td>
                <td className=" px-4 py-4 text-center text-sm">
                  {order.orderStatus === "pending" ? (
                    <span className="py-1.5 px-4 rounded-full bg-[#00BA9D] font-medium text-white">
                      pending
                    </span>
                  ) : order.orderStatus === "canceled" ? (
                    <span className="py-1.5 px-4 rounded-full bg-[#FF5470] text-white font-medium">
                      Cancelled
                    </span>
                  ) : order.orderStatus === "completed" ? (
                    <span className="py-1.5 px-4 rounded-full bg-[#035ECF] text-white font-medium">
                      Completed
                    </span>
                  ) : (
                    <span>No data</span>
                  )}
                </td>
                <td className=" px-4 py-4 text-center">
                  <FaEllipsisVertical
                    size={30}
                    className="text-green-500 mx-auto cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <OrdersSmallScreenView orders={ordersData} />
    </div>
  );
};

export default AllOrdersTable;
