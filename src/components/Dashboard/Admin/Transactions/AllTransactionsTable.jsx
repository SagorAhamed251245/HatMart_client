import Image from "next/image";
import React from "react";

const AllTransactionsTable = () => {
  const orders = [
    {
      id: 1,
      orderNumber: "ORD123",
      productImage: "https://i.ibb.co/37mp1RR/image.png",
      status: "approved",
      productName: "Product A",
      sku: "SKU001",
      date: "2023-08-16T10:00:00Z",
      payment: "600",
      tax: "4",
    },
    {
      id: 2,
      orderNumber: "ORD124",
      productImage: "https://i.ibb.co/DWCwJM6/image.png",
      status: "rejected",
      productName: "Product B",
      sku: "SKU002",
      date: "2023-08-16T10:00:00Z",
      payment: "120",
      tax: "5",
    },
    {
      id: 3,
      orderNumber: "ORD125",
      productImage: "https://i.ibb.co/rZYZTPR/image.png",
      status: "canceled",
      productName: "Product C",
      sku: "SKU003",
      date: "2023-08-16T10:00:00Z",
      payment: "85",
      tax: "3",
    },
    {
      id: 4,
      orderNumber: "ORD126",
      productImage: "https://i.ibb.co/DWCwJM6/image.png",
      status: "canceled",
      productName: "Product D",
      sku: "SKU004",
      date: "2023-08-16T10:00:00Z",
      payment: "240",
      tax: "5",
    },
    {
      id: 5,
      orderNumber: "ORD127",
      productImage: "https://i.ibb.co/KmPV68n/image.png",
      status: "approved",
      productName: "Product E",
      sku: "SKU005",
      date: "2023-08-16T10:00:00Z",
      payment: "35",
      tax: "4",
    },
    {
      id: 6,
      orderNumber: "ORD128",
      productImage: "https://i.ibb.co/DWCwJM6/image.png",
      status: "approved",
      productName: "Product F",
      sku: "SKU006",
      date: "2023-08-16T10:00:00Z",
      payment: "18",
      tax: "5",
    },
  ];
  return (
    <div
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      className="overflow-x-auto mt-10 border rounded-xl p-4 shadow mb-5"
    >
      <table className="min-w-full border-collapse ">
        <thead>
          <tr className="border-b border-gray-300 text-green-500 w-full">
            <th className=" px-4 py-4 text-center">DATE & TIME</th>
            <th className=" px-4 py-4 text-center">Transaction ID</th>
            <th className=" px-4 py-4 text-center">PRODUCT</th>
            <th className=" px-4 py-4 text-center">STATUS</th>
            <th className=" px-4 py-4 text-center">FEE</th>
            <th className=" px-4 py-4 text-center">TAX</th>
            <th className=" px-4 py-4 text-center">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-300 w-full">
              <td className=" px-4 py-4 text-center text-green-500">
                {new Date(order.date || new Date()).toLocaleString("en-US", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                })}{" "}
                <br />
                at{" "}
                {new Date(order.date || new Date()).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                })}
              </td>
              <td className=" px-4 py-4 text-center">{order.orderNumber}</td>
              <td className=" px-4 py-4 text-center flex gap-2 items-center justify-center">
                <div className="h-10 overflow-hidden object-contain rounded">
                  <Image
                    style={{ objectFit: "contain" }}
                    src={order.productImage}
                    alt="product image"
                    width={40}
                    height={40}
                  />
                </div>
                <span>{order.productName}</span>
              </td>

              <td className=" px-4 py-4 text-center text-sm">
                {order.status === "rejected" ? (
                  <span className="py-1.5 px-4 rounded-full bg-[#515C6B] font-medium text-white">
                    Rejected
                  </span>
                ) : order.status === "canceled" ? (
                  <span className="py-1.5 px-4 rounded-full bg-[#FF5470] text-white font-medium">
                    Cancelled
                  </span>
                ) : order.status === "approved" ? (
                  <span className="py-1.5 px-4 rounded-full bg-[#035ECF] text-white font-medium">
                    Approved
                  </span>
                ) : (
                  <span>No data</span>
                )}
              </td>
              <td className=" px-4 py-4 text-center">${order.payment}</td>
              <td className=" px-4 py-4 text-center">${order.tax}</td>
              <td className=" px-4 py-4 text-center font-semibold">
                ${parseFloat(order.payment) + parseFloat(order.tax)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTransactionsTable;
