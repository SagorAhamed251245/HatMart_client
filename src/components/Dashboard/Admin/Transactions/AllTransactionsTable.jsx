"use client";

import Image from "next/image";
import React from "react";
import TransactionsSmallScreenView from "./TransactionsSmallScreenView";

const AllTransactionsTable = ({ transactionsData }) => {
  console.log(transactionsData);

  return (
    <div
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      className="  mt-10 border dark:border-neutral-500 bg-transparent  rounded-xl lg:p-4 px-1 py-4 shadow mb-5"
    >
      <div className="hidden lg:block  overflow-x-auto">
        <table className=" w-full border-collapse ">
          <thead>
            <tr className="border-b border-gray-300 dark:border-neutral-400 text-green-500 w-full">
              <th className=" px-4 py-4 text-center">DATE & TIME</th>
              <th className=" px-4 py-4 text-center">Transaction ID</th>
              <th className=" px-4 py-4 text-center">PRODUCT</th>
              <th className=" px-4 py-4 text-center">PRICE</th>
              <th className=" px-4 py-4 text-center">Quantity</th>
              <th className=" px-4 py-4 text-center">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((order) => (
              <tr
                key={order._id}
                className="border-b border-gray-300 dark:border-neutral-400 w-full"
              >
                <td className=" px-4 py-4 text-center text-green-500">
                  {new Date(order?.createdAt || new Date()).toLocaleString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    }
                  )}{" "}
                  <br />
                  at{" "}
                  {new Date(order?.createdAt || new Date()).toLocaleString(
                    "en-US",
                    {
                      hour: "numeric",
                      minute: "numeric",
                    }
                  )}
                </td>
                <td className=" px-4 py-4 text-center text-sm">
                  {order.transactionId ? order?.transactionId : "No id found"}
                </td>
                <td className=" px-4 py-4 text-left flex gap-2 items-center justify-start">
                  <div className="h-10 w-10 overflow-hidden object-contain rounded">
                    <Image
                      style={{ objectFit: "contain" }}
                      src={order?.productImage}
                      alt="product image"
                      width={40}
                      height={40}
                    />
                  </div>
                  <span>{order?.productName.slice(0, 18)}</span>
                </td>

                <td className=" px-4 py-4 text-center">${order?.price}</td>
                <td className=" px-4 py-4 text-center">
                  {order?.quantity || 1}
                </td>
                <td className=" px-4 py-4 text-center font-semibold">
                  ${parseFloat(order?.price) * parseFloat(order?.quantity || 1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* For small screen */}
      <TransactionsSmallScreenView transactions={transactionsData} />
    </div>
  );
};

export default AllTransactionsTable;
