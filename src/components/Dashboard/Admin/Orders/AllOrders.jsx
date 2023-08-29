import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import Rating from "react-rating";

const AllOrders = () => {
  const orders = [
    {
      id: 1,
      orderNumber: "ORD123",
      productImage: "https://i.ibb.co/37mp1RR/image.png",
      status: "confirm",
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
      status: "complete",
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
      status: "cancel",
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
      status: "confirm",
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
      status: "complete",
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
      status: "cancel",
      productName: "Product F",
      sku: "SKU006",
      category: "Books",
      payment: "18",
      rate: "5",
    },
  ];
  return (
    <div className="overflow-x-auto mt-10 border rounded-xl p-4">
      <table className="min-w-full border-collapse ">
        <thead>
          <tr className="border-b border-gray-300 text-green-500 w-full">
            <th className=" px-4 py-4 text-center"># ORDER</th>
            <th className=" px-4 py-4 text-center">PRODUCT</th>
            <th className=" px-4 py-4 text-center">CATEGORY</th>
            <th className=" px-4 py-4 text-center">PAYMENT</th>
            <th className=" px-4 py-4 text-center">ORDER STATUS</th>
            <th className=" px-4 py-4 text-center">RATE</th>
            <th className=" px-4 py-4 text-center">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-300 w-full">
              <td className=" px-4 py-4 text-center text-green-500">
                {order.orderNumber}
              </td>
              <td className=" px-4 py-4 text-center flex gap-2 items-center">
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
              <td className=" px-4 py-4 text-center">{order.category}</td>
              <td className=" px-4 py-4 text-center">${order.payment}</td>
              <td className=" px-4 py-4 text-center">
                {order.status === "confirm" ? (
                  <span className="py-1.5 px-4 rounded-full bg-[#00BA9D] font-medium text-white">
                    Confirmed
                  </span>
                ) : order.status === "cancel" ? (
                  <span className="py-1.5 px-4 rounded-full bg-[#FF5470] text-white font-medium">
                    Cancelled
                  </span>
                ) : order.status === "complete" ? (
                  <span className="py-1.5 px-4 rounded-full bg-[#035ECF] text-white font-medium">
                    Completed
                  </span>
                ) : (
                  <span>No data</span>
                )}
              </td>
              <td className=" px-4 py-4 text-center">
                <div className="flex items-center justify-center gap-3 md:text-base text-sm">
                  <Rating
                    fractions={true}
                    placeholderRating={order.rate}
                    emptySymbol={<FaRegStar className="text-yellow-400" />}
                    placeholderSymbol={<FaStar className="text-yellow-400" />}
                    fullSymbol={<FaStar className="text-yellow-400" />}
                    readonly
                  />
                </div>
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
  );
};

export default AllOrders;
