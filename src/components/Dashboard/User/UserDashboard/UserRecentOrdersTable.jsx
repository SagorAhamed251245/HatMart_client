import Image from "next/image";
import React from "react";
import UserRecentOrderSmallScreenView from "./UserRecentOrderSmallScreenView";

const UserRecentOrdersTable = ({ ordersData }) => {
  //   get latest order data
  const latestOrderData = ordersData.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  console.log(latestOrderData);
  return (
    <>
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full border-collapse ">
          <thead>
            <tr className="border-b border-gray-300 text-green-500 w-full">
              <th className=" px-4 py-4 text-left">Order #</th>
              <th className=" px-4 py-4 text-left">ITEMS</th>
              <th className=" px-4 py-4 text-left">PLACED ON</th>
              <th className=" px-4 py-4 text-left">PRICE</th>
            </tr>
          </thead>

          <tbody>
            {ordersData.length > 0 &&
              ordersData.slice(0, 3).map((order) => (
                <tr key={order.id} className="border-b border-gray-300 w-full">
                  <td className=" px-4 py-4 text-left text-green-500">
                    {order?._id}
                  </td>
                  <td className=" px-4 py-4 text-left flex gap-2 items-center justify-start">
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
                  <td className=" px-4 py-4 text-left">
                    {new Date(order?.createdAt).toLocaleDateString()}
                  </td>
                  <td className=" px-4 py-4 text-left">${order?.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {ordersData.length === 0 && (
          <p className="text-center my-3 !w-full">
            You did not make any order yet.
          </p>
        )}
      </div>
      <UserRecentOrderSmallScreenView orders={latestOrderData} />
    </>
  );
};

export default UserRecentOrdersTable;
