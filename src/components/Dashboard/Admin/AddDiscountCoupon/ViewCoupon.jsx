"use client";
import React from "react";
import ViewCouponCard from "./ViewCouponCard";

const ViewCoupon = ({ discounts }) => {
  const handleDeleteDiscountCard = (data) => {
    const _id = data._id;
    const date = "01/02/1994";
    const expiredDiscount = { ...data, date };
  };
  return (
    <div className="shadow-xl border dark:border-neutral-500 bg-transparent  p-8 rounded-xl w-full md:w-1/2">
      {/* title */}
      <h4 className="text-2xl pb-6 font-semibold">View available coupon</h4>
      {/* view discount section */}
      <section className="flex flex-col h-[300px] gap-4 overflow-y-auto pr-3 scrollbar">
        {discounts.map((discount) => (
          <ViewCouponCard
            handleDeleteDiscountCard={handleDeleteDiscountCard}
            discount={discount}
            key={discount?._id}
          />
        ))}
      </section>
    </div>
  );
};

export default ViewCoupon;
