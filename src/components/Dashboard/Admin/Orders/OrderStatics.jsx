import React from "react";
import {
  FaCheckToSlot,
  FaListCheck,
  FaBan,
  FaRotateLeft,
} from "react-icons/fa6";

const OrderStatics = () => {
  return (
    <div className="mt-8 lg:flex justify-between gap-5 lg:space-y-0 space-y-5">
      <div className="lg:w-[35%] w-full hover:shadow-xl shadow-md p-5 border rounded duration-300">
        <h3 className="text-xl font-bold">Average Rate (%)</h3>
        <div>
          <label
            className=" font-semibold text-gray-600 dark:text-white flex justify-between mt-3"
            htmlFor="productView"
          >
            <span>Product Views</span>
            <span>87%</span>
          </label>
          <progress
            className="progress  block h-3 mt-2"
            value="87"
            max="100"
          ></progress>
        </div>
        <div>
          <label
            className=" font-semibold text-gray-600 dark:text-white flex justify-between mt-3"
            htmlFor="productView"
          >
            <span>Cart Abandonment Rate</span>
            <span>23%</span>
          </label>
          <progress
            className="progress  block h-3 mt-2"
            value="23"
            max="100"
          ></progress>
        </div>
      </div>

      {/* order details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  lg:w-[65%] w-full">
        <div className="flex flex-col hover:shadow-xl shadow-md p-5 border rounded duration-300 w-full">
          <p className=" bg-[#035ECF] p-2.5 rounded w-fit h-fit">
            <FaCheckToSlot className="  text-white" size={23} />
          </p>
          <h4 className="text-lg font-bold mt-5 mb-2 text-gray-600">
            Completed
          </h4>
          <h3 className="text-3xl font-bold text-gray-700">2,340</h3>
        </div>
        <div className="flex flex-col hover:shadow-xl shadow-md p-5 border rounded duration-300 w-full">
          <p className=" bg-[#00BA9D] p-2.5 rounded w-fit h-fit">
            <FaListCheck className="  text-white" size={23} />
          </p>
          <h4 className="text-lg font-bold mt-5 mb-2 text-gray-600">
            Confirmed
          </h4>
          <h3 className="text-3xl font-bold text-gray-700">159</h3>
        </div>
        <div className="flex flex-col hover:shadow-xl shadow-md p-5 border rounded duration-300 w-full">
          <p className=" bg-[#FF5470] p-2.5 rounded w-fit h-fit">
            <FaBan className="  text-white" size={23} />
          </p>
          <h4 className="text-lg font-bold mt-5 mb-2 text-gray-600">
            Canceled
          </h4>
          <h3 className="text-3xl font-bold text-gray-700">40</h3>
        </div>
        <div className="flex flex-col hover:shadow-xl shadow-md p-5 border rounded duration-300 w-full">
          <p className=" bg-[#515C6B] p-2.5 rounded w-fit h-fit">
            <FaRotateLeft className="  text-white" size={23} />
          </p>
          <h4 className="text-lg font-bold mt-5 mb-2 text-gray-600">Refund</h4>
          <h3 className="text-3xl font-bold text-gray-700">12</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderStatics;
