"use client";
import React, { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import OrdersSmallScreenView from "../../Admin/Orders/OrdersSmallScreenView";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Image from "next/image";
import OrderCancelSmallView from "./OrderCancelSmallView";

const CanceledOrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const data = [
    {
      id: 1,
      orderNumber: "ORD123",
      productImage: "https://i.ibb.co/37mp1RR/image.png",
      status: "canceled",
      productName: "Product A",
      sku: "SKU001",
      category: "Electronics",
      payment: "600",
      rate: "4",
      orderDate: "03/09/2023"
    },
    {
      id: 2,
      orderNumber: "ORD124",
      productImage: "https://i.ibb.co/DWCwJM6/image.png",
      status: "canceled",
      productName: "Product B",
      sku: "SKU002",
      category: "Clothing",
      payment: "120",
      rate: "5",
      orderDate: "04/09/2023"
    },
    {
      id: 3,
      orderNumber: "ORD125",
      productImage: "https://i.ibb.co/rZYZTPR/image.png",
      status: "canceled",
      productName: "Product C",
      sku: "SKU003",
      category: "Home & Kitchen",
      payment: "85",
      rate: "3",
      orderDate: "02/09/2023"
    },
    {
      id: 4,
      orderNumber: "ORD126",
      productImage: "https://i.ibb.co/DWCwJM6/image.png",
      status: "canceled",
      productName: "Product D",
      sku: "SKU004",
      category: "Beauty",
      payment: "240",
      rate: "5",
      orderDate: "09/09/2023"
    },
    {
      id: 5,
      orderNumber: "ORD127",
      productImage: "https://i.ibb.co/KmPV68n/image.png",
      status: "canceled",
      productName: "Product E",
      sku: "SKU005",
      category: "Toys & Games",
      payment: "35",
      rate: "4",
      orderDate: "08/09/2023"
    },
    {
      id: 6,
      orderNumber: "ORD128",
      productImage: "https://i.ibb.co/DWCwJM6/image.png",
      status: "canceled",
      productName: "Product F",
      sku: "SKU006",
      category: "Books",
      payment: "18",
      rate: "5",
      orderDate: "02/09/2023"
    },
  ];
  useState(() => {
    const canceledOrders = data.filter((order) => order.status === "canceled");
    setOrders(canceledOrders);
  }, []);
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
                  <span className="py-1 px-3  bg-gray-200 font-semibold  rounded-full">More Details</span>
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
