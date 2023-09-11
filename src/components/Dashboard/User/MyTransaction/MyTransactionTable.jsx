"use client";
import Image from "next/image";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import MyOrdersSmallScreenView from "../MyOrder/MyOrdersSmallScreenView";
import MyTransactionTableMobile from "./MyTransactionTableMobile";

const MyTransactionTable = () => {
  const transaction = [
    {
      _id: "T001",
      transaction_id: "T001",
      datetime: "2023-09-10T08:30:00",
      amount: 50.25,
      payment_method: "Credit Card",
      products: ["P001", "P002", "P003"],
      shippingCharge: 5.0,
    },
    {
      _id: "T002",
      transaction_id: "T002",
      datetime: "2023-09-09T19:15:00",
      amount: 75.0,
      payment_method: "Cash",
      products: ["P004", "P005"],
      shippingCharge: 0.0,
    },
    {
      _id: "T003",
      transaction_id: "T003",
      datetime: "2023-09-08T14:45:00",
      amount: 40.5,
      payment_method: "Debit Card",
      products: ["P006"],
      shippingCharge: 3.75,
    },
    {
      _id: "T004",
      transaction_id: "T004",
      datetime: "2023-09-07T10:00:00",
      amount: 120.0,
      payment_method: "PayPal",
      products: ["P007", "P008", "P009"],
      shippingCharge: 8.5,
    },
    {
      _id: "T005",
      transaction_id: "T005",
      datetime: "2023-09-06T17:30:00",
      amount: 80.0,
      payment_method: "Bank Transfer",
      products: [],
      shippingCharge: 0.0,
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
              <th className=" px-4 py-4 text-center">#Transaction</th>
              <th className=" px-4 py-4 text-center">Pay By</th>
              <th className=" px-4 py-4 text-center">Amount</th>
              <th className=" px-4 py-4 text-center">Date</th>
              <th className=" px-4 py-4 text-center">Time</th>
              <th className=" px-4 py-4 text-center">Shiping</th>
              <th className=" px-4 py-4 text-center">more</th>
            </tr>
          </thead>
          <tbody>
            {transaction.map((data) => (
              <tr
                key={data?._id}
                className="border-b border-gray-300 w-full"
              >
                <td className=" px-4 py-4 text-center text-green-500">
                  {data?.transaction_id}
                </td>
                <td className=" px-4 py-4 text-center flex gap-2 items-center justify-center">
                  <span>{data?.payment_method}</span>
                </td>
                <td className=" px-4 py-4 text-center">$ {data?.amount}</td>
                <td className=" px-4 py-4 text-center">{new Date(data?.datetime).toLocaleDateString()}</td>
                <td className=" px-4 py-4 text-center">{new Date(data?.datetime).toLocaleTimeString()}</td>
                <td className=" px-4 py-4 text-center">$ {data?.shippingCharge}</td>
                
                
                <td className=" px-4 py-4 text-center">
                  More Details
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <MyTransactionTableMobile transaction={transaction} />
    </div>
  );
};

export default MyTransactionTable;
