"use client";
import addCoupon from "@/utils/addCoupon";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddCoupon = () => {

  const {refresh} = useRouter()

  const [couponData, setCouponData] = useState({
    code: "",
    description: "",
    percentage: "",
  });
  const handleAddDiscount = async (e) => {
    e.preventDefault();
    const form = e.target;
    const code = form.code.value;
    const description = form.description.value;
    const percentage = form.percentage.value;
    const discount = { code, description, percentage };

    const couponData = {
      code,
      description,
      percentage: (percentage / 100)
    };
    if (couponData) {
      await addCoupon(couponData)
      .then(() => {
        toast.success("coupon has been added")
        reset();
        refresh();
      })
      .catch(() => {
        toast.error("while adding the coupon an error occured")
      });
    }
  };

  const reset = () => {
    setCouponData({
      code: "",
      description: "",
      percentage: "",
    });

  };
  return (
    <div className="shadow-xl p-8 rounded-xl border dark:border-neutral-500 dark:bg-transparent  md:w-1/2 w-full">
      {/* title */}
      <h4 className="text-2xl pb-6 font-semibold">Add coupon</h4>
      {/* add discount section */}
      <section className="">
        <form onSubmit={handleAddDiscount}>
          <div className="flex flex-col gap-1 mb-6">
            <label className="text-xs text-gray-400" htmlFor="code">
              Code
            </label>
            <div className="border-2 text-sm border-orange-500 bg-white dark:text-white dark:bg-neutral-700 w-full p-2 rounded">
              <input
                className="outline-none w-full dark:bg-transparent"
                type="text"
                name="code"
                placeholder="Discount code here Ex:'FALLSALE'"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 mb-6">
            <label className="text-xs text-gray-400" htmlFor="code">
              Description
            </label>
            <div className="border-2 text-sm border-orange-500 bg-white dark:text-white dark:bg-neutral-700 w-full p-2 rounded">
              <input
                className="outline-none w-full dark:bg-transparent"
                type="text"
                name="description"
                placeholder="Discount description here Ex: 'fall sale'"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="text-xs text-gray-400" htmlFor="code">
              Percentage
            </label>
            <div className="border-2 text-sm border-orange-500 bg-white dark:text-white dark:bg-neutral-700 w-full p-2 rounded">
              <input
                className="outline-none w-full dark:bg-transparent"
                type="number"
                name="percentage"
                placeholder="Discount percentage here Ex: '20'"
                required
              />
            </div>
          </div>

          <button
            className="bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-400 duration-300 text-xs font-semibold mt-3 p-3 uppercase rounded"
            type="submit"
          >
            Create Discount
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddCoupon;
