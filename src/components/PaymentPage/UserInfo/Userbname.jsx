import React from "react";

const Userbname = () => {
  return (
    <>
      <div className="flex sm:flex-row space-x-3 ">
        <div className="flex flex-col w-[50%]">
          <label htmlFor="inputField1" className="font-normal mb-1">
            User Name
          </label>
          <input
            type="text"
            id="inputField1"
            className="border shadow-xl px-4 py-2 rounded-lg"
            placeholder="Enter name"
          />
        </div>

        <div className="flex flex-col w-[50%]">
          <label htmlFor="inputField2" className="font-normal mb-1">
            Email
          </label>
          <input
            type="text"
            id="inputField2"
            className="border shadow-xl px-4 py-2 rounded-lg"
            placeholder="Email"
          />
        </div>
      </div>
    </>
  );
};

export default Userbname;
