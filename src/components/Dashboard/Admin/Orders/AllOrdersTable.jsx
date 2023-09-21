import React from "react";
import OrdersSmallScreenView from "./OrdersSmallScreenView";
import OrdersTable from "./OrdersTable";

const AllOrdersTable = ({ ordersData }) => {
  
  const sortedOrdersData = ordersData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      className="overflow-x-auto mt-10 border rounded-xl p-4 dark:border-neutral-500 bg-transparent  shadow mb-5"
    >
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full border-collapse ">
          <thead>
            <tr className="border-b border-gray-300 text-green-500 w-full">
              <th className=" px-4 py-4 text-center"># ORDER</th>
              <th className=" px-4 py-4 text-center">PRODUCT</th>
              <th className=" px-4 py-4 text-center">CATEGORY</th>
              <th className=" px-4 py-4 text-center">QUANTITY</th>
              <th className=" px-4 py-4 text-center">PRICE</th>
              <th className=" px-4 py-4 text-center">ORDER STATUS</th>
              <th className=" px-4 py-4 text-center">ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {sortedOrdersData.map((order) => (
              <OrdersTable key={order._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
      <OrdersSmallScreenView orders={ordersData} />
    </div>
  );
};

export default AllOrdersTable;
