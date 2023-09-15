import getAllUsers from "@/utils/users/getAllUsers";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const RecentSales = ({ transactionsData }) => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    (async () => {
      const users = await getAllUsers();
      setUsersData(users);
    })();
  }, []);

  // get the sales data by transaction id for individual user
  const salesData = transactionsData.map((transaction) => {
    const user = usersData.find((user) => user._id === transaction.userId);
    if (user) {
      return {
        ...transaction,
        userInfo: user,
      };
    }
    return transaction;
  });
  // get the latest sales data by sort
  const latestSalesData = salesData.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="lg:w-[40%] w-full border border-gray-300 rounded-md p-3">
      <h5 className="font-medium text-lg">Recent Sales</h5>
      <p className="text-gray-700 dark:white">You made 265 sales this month.</p>
      <div className="grid grid-cols-1 gap-4">
        {latestSalesData &&
          latestSalesData.length > 0 &&
          latestSalesData.slice(0, 5).map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center shadow border border-gray-100 py-2"
            >
              <div className="flex items-center gap-4">
                <div className="rounded">
                  <Image
                    src={item?.userInfo?.image}
                    alt={item?.userInfo?.name}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="mb-2">
                  <p>{item?.userInfo?.name}</p>
                  <p>{item?.userInfo?.email}</p>
                </div>
              </div>
              <p className="text-lg font-semibold">${item?.totalPrice}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentSales;
