"use client";

import Image from "next/image";
import React from "react";
import MyWishListSmallScreenView from "./MyWishListSmallScreenView";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";

const MyWishListTable = () => {
  const orders = [
    {
      id: 1,
      orderNumber: "ORD123",
      productImage: "https://i.ibb.co/37mp1RR/image.png",
      status: "confirmed",
      productName: "Product A",
      sku: "SKU001",
      category: "Electronics",
      payment: "600",
      rate: "4",
    },
    {
      id: 2,
      orderNumber: "ORD124",
      productImage: "https://i.ibb.co/DWCwJM6/image.png",
      status: "completed",
      productName: "Product B",
      sku: "SKU002",
      category: "Clothing",
      payment: "120",
      rate: "5",
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
    },
    {
      id: 4,
      orderNumber: "ORD126",
      productImage: "https://i.ibb.co/DWCwJM6/image.png",
      status: "confirmed",
      productName: "Product D",
      sku: "SKU004",
      category: "Beauty",
      payment: "240",
      rate: "5",
    },
    {
      id: 5,
      orderNumber: "ORD127",
      productImage: "https://i.ibb.co/KmPV68n/image.png",
      status: "completed",
      productName: "Product E",
      sku: "SKU005",
      category: "Toys & Games",
      payment: "35",
      rate: "4",
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
    },
  ];
  return (
    <div
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      className="overflow-x-auto mt-10 border rounded-xl p-4 shadow mb-5"
    >
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full border-collapse ">
          <thead>
            <tr className="border-b border-gray-300 text-green-500 w-full">
              <th className=" px-4 py-4 text-center">PRODUCT</th>
              <th className=" px-4 py-4 text-center">CATEGORY</th>
              <th className=" px-4 py-4 text-center">PRICE</th>
              <th className=" px-4 py-4 text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-300 w-full">
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
                <td className=" px-4 py-4 text-center">{order.category}</td>
                <td className=" px-4 py-4 text-center">${order.payment}</td>

                <td className=" px-4 py-4  ">
                  <div className="flex justify-center items-center gap-4 w-fit mx-auto">
                    <p className="tooltip tooltip-top " data-tip="delete">
                      <AiOutlineDelete
                        size={24}
                        className="text-red-400 mx-auto cursor-pointer"
                      />
                    </p>
                    <button
                      onClick={() => handleAddToCart(id)}
                      className="flex justify-center items-center gap-2 text-[#34B701] font-medium bg-green-100 text-sm md:text-base px-[10px] md:px-4 py-1 rounded hover:bg-green-200"
                    >
                      <AiOutlineShoppingCart size={20} /> Add
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <MyWishListSmallScreenView orders={orders} />
    </div>
  );
};

export default MyWishListTable;
