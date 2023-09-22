import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiCreditCard, FiUsers } from "react-icons/fi";
import { MdShowChart } from "react-icons/md";

const SalesStatistics = ({ transactionsData }) => {
  // calculate total revenue
  const totalRevenue = transactionsData.reduce(
    (total, current) => total + current?.totalPrice || 0,
    0
  );
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 dark:text-white">
      <div className="flex justify-between border border-gray-300 p-4 rounded-md">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Total Revenue</h3>
          <h1 className="text-2xl font-bold">${totalRevenue.toFixed(2)}</h1>
          <p className=" text-sm dark:text-white">+20.1% from last month</p>
        </div>
        <p>
          <BsCurrencyDollar />
        </p>
      </div>
      <div className="flex justify-between border border-gray-300 p-4 rounded-md">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Subscriptions</h3>
          <h1 className="text-2xl font-bold">+21</h1>
          <p className=" text-sm dark:text-white">+180.1% from last month</p>
        </div>
        <p>
          <FiUsers />
        </p>
      </div>
      <div className="flex justify-between border border-gray-300 p-4 rounded-md">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Sales</h3>
          <h1 className="text-2xl font-bold">+{transactionsData.length}</h1>
          <p className=" text-sm dark:text-white">+19% from last month</p>
        </div>
        <p>
          <FiCreditCard />
        </p>
      </div>
      <div className="flex justify-between border border-gray-300 p-4 rounded-md">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Active Now</h3>
          <h1 className="text-2xl font-bold">+5</h1>
          <p className=" text-sm dark:text-white">+201 since last hour</p>
        </div>
        <p>
          <MdShowChart />
        </p>
      </div>
    </div>
  );
};

export default SalesStatistics;
