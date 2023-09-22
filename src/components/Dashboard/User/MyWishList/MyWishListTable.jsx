"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import MyWishListSmallScreenView from "./MyWishListSmallScreenView";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import getUserData from "@/data/getUserData";
import getWishListByUserId from "@/utils/users/getWishListByUserId";

const MyWishListTable = () => {
  const user = getUserData();

  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    if (user) {
      (async () => {
        const data = await getWishListByUserId(user?._id);
        setOrders(data);
        
      })();
    } else {
      setOrders([]);
    }
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
              <th className=" px-4 py-4 text-center">PRODUCT</th>
              <th className=" px-4 py-4 text-center">CATEGORY</th>
              <th className=" px-4 py-4 text-center">PRICE</th>
              {/* <th className=" px-4 py-4 text-center">ACTIONS</th> */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order?._id} className="border-b border-gray-300 w-full">
                <td className=" px-4 py-4 text-center flex gap-2 items-center justify-center">
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
                <td className=" px-4 py-4 text-center">{order?.category}</td>
                <td className=" px-4 py-4 text-center">${order?.price}</td>

                {/* <td className=" px-4 py-4  ">
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
                </td> */}
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
