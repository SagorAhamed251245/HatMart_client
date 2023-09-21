import React, { useState } from "react";
import OrderStatusEditModal from "./OrderStatusEditModal";
import { FaEllipsisVertical } from "react-icons/fa6";
import Image from "next/image";

const OrdersTable = ({order}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
          <span className="text-sm">{order?.productName.slice(0, 18)}</span>
        </td>
        <td className=" px-4 py-4 text-center">{order?.productCategory}</td>
        <td className=" px-4 py-4 text-center">{order?.quantity}</td>
        <td className=" px-4 py-4 text-center">${order?.price}</td>
        <td className=" px-4 py-4 text-center text-sm">
          {order?.orderStatus === "pending" ? (
            <span className="py-1.5 px-4 rounded-full bg-[#00BA9D] font-medium text-white">
              pending
            </span>
          ) : order?.orderStatus === "canceled" ? (
            <span className="py-1.5 px-4 rounded-full bg-[#FF5470] text-white font-medium">
              Cancelled
            </span>
          ) : order?.orderStatus === "completed" ? (
            <span className="py-1.5 px-4 rounded-full bg-[#035ECF] text-white font-medium">
              Completed
            </span>
          ) : (
            <span>No data</span>
          )}
        </td>
        <td className=" px-4 py-4 text-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            disabled={order?.orderStatus == 'canceled'||order?.orderStatus == 'completed' } 
            className="text-green-500 mx-auto cursor-pointer"
            title="Change role"
          >
            <FaEllipsisVertical size={30} />
          </button>
        </td>
      </tr>
      <OrderStatusEditModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        Status={order?.orderStatus}
        id={order?._id}
      />
    </>
  );
};

export default OrdersTable;
