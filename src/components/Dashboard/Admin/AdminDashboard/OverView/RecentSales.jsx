import Image from "next/image";
import React from "react";

const RecentSales = ({ salesData }) => {
  return (
    <div className="lg:w-[40%] w-full border border-gray-300 rounded-md p-3">
      <h5 className="font-medium text-lg">Recent Sales</h5>
      <p className="text-gray-700 dark:white">You made 265 sales this month.</p>
      <div className="grid grid-cols-1 gap-4">
        {salesData &&
          salesData.length > 0 &&
          salesData.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center shadow border border-gray-100 py-2"
            >
              <div className="flex items-center gap-4">
                <div className="rounded">
                  <Image
                    src={item.image}
                    alt={item.customerName}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="mb-2">
                  <p>{item.customerName}</p>
                  <p>{item.email}</p>
                </div>
              </div>
              <p className="text-lg font-semibold">${item.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentSales;
