import Image from "next/image";
import React from "react";

const BkashModal = () => {
  return (
    <div className="max-w-xl border border-gray-300 mt-5">
      <div className="w-full my-5">
        <Image
          className="mx-auto"
          src="https://i.ibb.co/h20fyrf/image.png"
          alt="bkash-image"
          width={300}
          height={80}
        />
      </div>
      <div className="border border-b-8 w-full border-[#EC0A7D]"></div>
      <div className="flex justify-between gap-4 p-4 ">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 border border-gray-300 rounded-full">
            <Image
              src="https://i.ibb.co/TBjb8K5/image.png"
              width={32}
              height={32}
            />
          </div>
          <div className="w-56">
            <p className="text-xs mb-1">TestCheckoutDemoMerchant1 </p>
            <p className="text-xs">Invoice: rBZpTwzvK3I</p>
          </div>
        </div>
        <p className="text-xl font-medium">$74.56</p>
      </div>

      <div className="bg-[url('https://i.ibb.co/8K2r6x3/image.png')] h-44">
        <div className="flex h-full w-full flex-col justify-center items-center ">
          <div className="text-center">
            {" "}
            <p className="text-xs mb-4 text-white">Your bKash Account number</p>
            <input
              className="w-[90%] mx-auto focus:outline-0 text-center px-1.5 py-1 focus:shadow-blue-300 focus:shadow-inner"
              type="text"
              placeholder="e.g 01XXXXXXXXX"
              maxLength={11}
              autoComplete="off"
              required
            />
            <p className="text-xs text-white mt-3">
              By clicking on <span className="font-semibold">Confirm</span>, you
              are agreeing to the{" "}
              <span className="font-semibold underline">
                terms & conditions
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-[#d1d3d4] w-full">
        <button className="uppercase text-sm font-semibold text-gray-50 w-full text-center py-2 border-r-2 border-gray-400">
          Close
        </button>
        <button className="text-gray-500 text-sm font-semibold uppercase w-full text-center py-2">
          Confirm
        </button>
      </div>

      <div className="flex justify-center items-center py-2">
        <div className="flex justify-center items-center bg-[#EC0A7D] rounded-full h-6 w-6">
          <Image
            src="https://i.ibb.co/ZL2hrXH/image.png"
            height={10}
            width={10}
          />
        </div>
        <p className="text-[#EC0A7D] font-semibold ml-2.5">16247</p>
      </div>
    </div>
  );
};

export default BkashModal;
