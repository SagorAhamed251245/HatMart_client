import React from "react";

const ExpiredCouponCard = ({coupon}) => {
  return (
    <div className="w-full p-3 shadow-lg  dark:bg-neutral-800 dark:border-neutral-600  rounded-lg border flex gap-3 items-center justify-between">
      <span title="discount code" className="text-sm w-1/3 font-semibold">
        {coupon?.code}
      </span>
      <div className="flex flex-wrap gap-2 md:justify-between justify-center w-1/3">
        <span
          title="discount code"
          className="text-sm md:block hidden text-end font-semibold"
        >
          {coupon?.description}
        </span>
        <span
          title={`${coupon?.description}`}
          className="text-sm md:hidden block text-end font-semibold"
        >
          {coupon?.description.length > 10
            ? coupon?.description?.slice(0, 10)
            : coupon?.description}
          ...
        </span>

        <span title="discount code" className="text-sm font-semibold">
          {coupon?.expirationDate}
        </span>
      </div>
      <div className=" flex w-1/3 justify-end">
        <span title="discount percent" className="text-green-500">
          {coupon?.discount * 100}%
        </span>
      </div>
    </div>
  );
};

export default ExpiredCouponCard;
