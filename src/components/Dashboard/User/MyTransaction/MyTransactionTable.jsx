"use client";
import Image from "next/image";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import MyOrdersSmallScreenView from "../MyOrder/MyOrdersSmallScreenView";
import MyTransactionTableMobile from "./MyTransactionTableMobile";
import getMyTransaction from "@/utils/users/getMyTransaction";
import getUserData from "@/data/getUserData";
import { useEffect, useState } from "react";

const MyTransactionTable = () => {
  const [MyTransaction, setTransaction] = useState([]);

  const user = getUserData();
  
  useEffect(() => {
    (async () => {
      const data = await getMyTransaction(user?._id);
      setTransaction(data);
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
              <th className=" px-4 py-4 text-center">#Transaction</th>
              <th className=" px-4 py-4 text-center">Payment Method</th>
              <th className=" px-4 py-4 text-center">Amount</th>
              <th className=" px-4 py-4 text-center">Date</th>
              <th className=" px-4 py-4 text-center">Time</th>
              <th className=" px-4 py-4 text-center">more</th>
            </tr>
          </thead>
          <tbody>
            {MyTransaction.map((data) => (
              <tr key={data?._id} className="border-b border-gray-300 w-full">
                <td className=" px-4 py-4 text-center  text-green-500">
                  {data?._id}
                </td>
                <td className=" px-4 py-4 text-center flex gap-2 items-center justify-center">
                  <span>{data?.paymentMethod}</span>
                </td>
                <td className=" px-4 py-4 text-center">
                  ${(data?.totalPrice).toFixed(2)}
                </td>
                <td className=" px-4 py-4 text-center">
                  {new Date(data?.createdAt).toLocaleDateString()}
                </td>
                <td className=" px-4 py-4 text-center">
                  {new Date(data?.createdAt).toLocaleTimeString()}
                </td>
                <td className=" px-4 py-4 text-center">More Details</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <MyTransactionTableMobile transaction={MyTransaction} />
    </div>
  );
};

export default MyTransactionTable;
