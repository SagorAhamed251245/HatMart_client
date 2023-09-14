import React from "react";
import ExpiredCouponCard from "./ExpiredCouponCard";

const ExpiredCoupon = ({ expiredDiscounts }) => {
  return (
    <div className=" shadow-2xl md:p-8 p-3 rounded-xl mt-4">
      {/* title */}
      <h4 className="text-2xl pb-6 font-semibold">Expired coupons</h4>
      {/* view discount section */}
      <section className="flex flex-col h-[300px] gap-4 overflow-y-auto pr-3 scrollbar">
        {expiredDiscounts.map((coupon) => (
          <ExpiredCouponCard key={coupon._id} coupon={coupon} />
        ))}
      </section>
    </div>
  );
};

export default ExpiredCoupon;
