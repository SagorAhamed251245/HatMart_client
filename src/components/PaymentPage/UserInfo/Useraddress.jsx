import React from "react";

const Useraddress = () => {
  return (
    <>
      <div className="w-[100%] mt-2 ">
        <div className="flex flex-col">
          <label htmlFor="inputField1" className="font-normal pl-2 mb-1">
            Address
          </label>
          <input
            type="text"
            id="inputField1"
            className="border shadow-xl px-4 py-2 rounded-lg"
            placeholder="Address"
          />
        </div>
      </div>
    </>
  );
};

export default Useraddress;
