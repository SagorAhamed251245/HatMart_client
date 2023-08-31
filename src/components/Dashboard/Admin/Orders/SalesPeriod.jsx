import React from "react";
import DateSelector from "./DateSelector";

const SalesPeriod = () => {
  return (
    <div className="md:flex justify-between">
      <div className="flex flex-col gap-2">
        <label className="text-xl font-bold" htmlFor="salesPeriod">
          Sales Period:
        </label>
        <DateSelector />
      </div>
      <div className="md:flex items-center gap-3">
        <select
          className="block w-full md:w-56 px-3 mt-5 md:mt-0 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  focus:outline-none hover:border-green-500 duration-300 focus:border-green-500"
          name="animals"
        >
          <option value="">All Products</option>
          <option value="dog">Vegetables</option>
          <option value="cat">Toys</option>
        </select>
        <select
          className="block w-full md:w-56 mt-5 md:mt-0 px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  focus:outline-none hover:border-green-500 duration-300 focus:border-green-500"
          name="animals"
        >
          <option value="">Default Sorting</option>
          <option value="dog">By name: A-Z</option>
          <option value="dog">By name: Z-A</option>
          <option value="dog">Rating: Hight to low</option>
          <option value="dog">Rating: Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default SalesPeriod;
