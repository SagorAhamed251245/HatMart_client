"use client";
import React from "react";
import ViewCouponCard from "./ViewCouponCard";
import toast from "react-hot-toast";
import deleteCoupon from "@/utils/coupon/deleteCoupon";
import { useRouter } from "next/navigation";
// import expiredCoupon from "@/utils/coupon/expiredCoupon";

const ViewCoupon = ({ discounts }) => {
  const { refresh } = useRouter();
  const handleDeleteDiscountCard = async (data) => {
    const _id = data._id;
    const currentDateOnly = new Date().toLocaleDateString();
    const expiredDiscount = { ...data, currentDateOnly };
    console.log(expiredDiscount);

    await deleteCoupon(_id)
      .then((res) => {
        toast.success("coupon deleted successfully");
        refresh();
        // (async () => {
        //   await expiredCoupon(expiredDiscount)
        //     .then((res) => {
        //       console.log(res);
        //       toast.success("coupon has been deleted");
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        // })();
      })
      .catch((err) => {
        console.log(err);
      });
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
