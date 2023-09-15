import React from "react";
import { TiDelete } from "react-icons/ti";

const ViewCouponCard = ({ discount, handleDeleteDiscountCard }) => {
  const { percentage } = discount;
  return (
    <div className="w-full p-3 shadow-lg rounded-lg border flex gap-3 items-center justify-between">
      <span title="discount code" className="text-sm font-semibold">
        {discount?.code}
      </span>
      <div className="w-1/2 flex justify-between">
        <span title="discount percent" className="text-green-500">
          {parseFloat(percentage).toFixed(2)}%
        </span>
        <button
          onClick={() => handleDeleteDiscountCard(discount)}
          title="delete"
          className="text-red-500 text-xl px-2 hover:bg-red-100 rounded-full duration-700 "
        >
          <TiDelete />
        </button>
      </div>
    </div>
  );
};

export default ViewCouponCard;
