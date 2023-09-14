"use client";
import React from "react";
import DateSelector from "../Orders/DateSelector";

const TransactionFilter = () => {
  return (
    <div className="md:flex justify-between ">
      <div className="flex flex-col gap-2">
        <label className="text-xl font-bold" htmlFor="salesPeriod">
          Transactions Date form:
        </label>
        <DateSelector />
      </div>
      <div className="mt-5 md:mt-0 ">
        <select
          className="block w-full md:w-fit px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  focus:outline-none hover:border-green-500 duration-300 focus:border-green-500"
          name="animals"
        >
          <option value="">Default Sorting</option>
          <option value="dog">Recent</option>
          <option value="dog">Oldest</option>
          <option value="dog">Amount: Hight to low</option>
          <option value="dog">Amount: Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default TransactionFilter;
