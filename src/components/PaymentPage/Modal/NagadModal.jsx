import Image from "next/image";
import React from "react";

const NagadModal = () => {
  return (
    <div className=" w-96 bg-cover bg-no-repeat border border-gray-300 bg-[url('https://i.ibb.co/nrbD8X0/image.png')] mt-5">
      <h3 className="text-center font-bold text-[#ccc] pt-20">
        Save Your Nagad Account for Future Payments
      </h3>
      <div className="text-center">
        <div className="mb-2 mt-8">
          <Image
            className="mx-auto w-fit h-16"
            src="https://i.ibb.co/RDJN7mN/image.png"
            alt="nagad-logo"
            width={300}
            height={80}
          />
        </div>
        <p className="font-bold text-[#ccc]">HatMart LTD.</p>
      </div>
      <div className="text-center mt-14">
        <p className="font-bold text-[#ccc] mb-2">Your Nagad Account Number</p>
        <input
          className="w-[90%] mx-auto focus:outline-0 text-center px-1.5 py-1 focus:shadow-blue-300 focus:shadow-inner"
          type="text"
          placeholder="e.g 01XXXXXXXXX"
          maxLength={11}
          autoComplete="off"
          required
        />
      </div>
      <div className="text-center mt-20">
        <p className="text-xs text-[#ccc] ">
          By clicking/tapping "Proceed" you are agreeing to our{" "}
          <span className="font-bold link-hover cursor-pointer">
            Terms and Conditions
          </span>
        </p>

        <div className="flex justify-center gap-2 mt-4">
          <button className="px-1.5 w-20 text-sm font-bold py-px  border border-white hover:text-white bg-white text-red-500 rounded hover:bg-[#9F0A0A] duration-200">
            Proceed
          </button>
          <button className="px-1.5 w-20 text-sm font-bold py-px border border-white hover:text-white bg-white text-red-500 rounded hover:bg-[#9F0A0A] duration-200">
            Close
          </button>
        </div>
      </div>
      <div className=" my-5">
        <Image
          className="mx-auto w-fit h-16"
          src="https://i.ibb.co/yQgmLDm/image.png"
          alt="nagad-logo"
          width={300}
          height={80}
        />
      </div>
    </div>
  );
};

export default NagadModal;
