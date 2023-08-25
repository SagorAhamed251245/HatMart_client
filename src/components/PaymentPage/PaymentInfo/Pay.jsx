import React from "react";

const Pay = () => {
  return (
    <div>
      <div className="flex flex-col w-[100%] mb-3">
        <label htmlFor="inputField4" className="font-normal mb-1 pl-2">
          Number
        </label>
        <input
          type="tell"
          id="inputField4"
          className="border shadow-xl px-4 py-2 rounded-lg"
          placeholder="+880"
        />
      </div>
    </div>
  );
};

export default Pay;
