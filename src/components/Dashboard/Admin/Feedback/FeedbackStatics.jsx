import React from "react";
import { BiSolidUserPlus } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa6";

const FeedbackStatics = () => {
  return (
    <div className="mt-8 lg:flex justify-between gap-5">
      <div className="lg:w-[35%] hover:shadow-xl shadow-md p-5 border rounded duration-300">
        <h3 className="text-xl font-bold">Reviews Rate (%)</h3>
        <div>
          <label
            className=" font-semibold text-gray-600 dark:text-white flex justify-between mt-3"
            htmlFor="productView"
          >
            <span>Positive reviews</span>
            <span>87%</span>
          </label>
          <progress
            className="progress progress-success  block h-3 mt-2"
            value="97"
            max="100"
          ></progress>
        </div>
        <div>
          <label
            className=" font-semibold text-gray-600 dark:text-white flex justify-between mt-3"
            htmlFor="productView"
          >
            <span>negative reviews</span>
            <span>3%</span>
          </label>
          <progress
            className="progress progress-warning block h-3 mt-2"
            value="3"
            max="100"
          ></progress>
        </div>
      </div>
      <div className="flex mt-5 lg:mt-0 gap-5 justify-between lg:w-[65%]">
        {/* New */}
        <div className="flex flex-col     justify-center items-center                                                                               hover:shadow-xl shadow-md p-5 border rounded duration-300 w-full">
          <p className=" bg-[#035ECF] p-2.5 rounded w-fit h-fit">
            <BiSolidUserPlus className="  text-white" size={23} />
          </p>
          <h4 className="text-lg font-bold mt-5 mb-2 text-gray-600">New</h4>
          <h3 className="text-3xl  font-bold text-gray-700">2,340</h3>
        </div>

        {/* Regular */}
        <div className="flex flex-col  justify-center items-center hover:shadow-xl shadow-md p-5 border rounded duration-300 w-full">
          <p className=" bg-[#00BA9D] p-2.5 rounded w-fit h-fit">
            <FaUserClock className="  text-white" size={23} />
          </p>
          <h4 className="text-lg font-bold mt-5 mb-2 text-gray-600">Regular</h4>
          <h3 className="text-3xl font-bold text-gray-700">159</h3>
        </div>

        {/* Total */}
        <div className="flex flex-col justify-center items-center hover:shadow-xl shadow-md p-5 border rounded duration-300 w-full">
          <p className=" bg-[#FF5470] p-2.5 rounded w-fit h-fit">
            <FaUsers className="  text-white" size={23} />
          </p>
          <h4 className="text-lg font-bold mt-5 mb-2 text-gray-600">Total</h4>
          <h3 className="text-3xl font-bold text-gray-700">40</h3>
        </div>
      </div>
    </div>
  );
};

export default FeedbackStatics;
