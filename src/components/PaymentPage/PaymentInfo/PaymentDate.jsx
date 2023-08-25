import React from "react";

const PaymentDate = () => {
  return (
    <div className="flex flex-col w-[100%]">
      <label htmlFor="inputField4" className="font-normal mb-1 pl-2">
        Date
      </label>
      <input
        type="date"
        id="inputField4"
        className="border shadow-xl px-4 py-2 rounded-lg"
        placeholder="+880"
      />
    </div>
  );
};

export default PaymentDate;
