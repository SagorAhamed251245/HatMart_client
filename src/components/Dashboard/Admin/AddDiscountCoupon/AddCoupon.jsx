"use client";
import React from "react";

const AddCoupon = () => {
  const handleAddDiscount = (e) => {
    e.preventDefault();
    const form = e.target;
    const code = form.code.value;
    const description = form.description.value;
    const percentage = ((form.percentage.value) / 100);
    console.log(percentage)
    const discount = {code, description, percentage}

    // TODO: Add post api here to send the discount to the backend
  };
  return (
    <div className="shadow-xl p-8 rounded-xl md:w-1/2 w-full">
      {/* title */}
      <h4 className="text-2xl pb-6 font-semibold">Add coupon</h4>
      {/* add discount section */}
      <section className="">
        <form onSubmit={handleAddDiscount}>
          <div className="flex flex-col gap-1 mb-6">
            <label className="text-xs text-gray-400" htmlFor="code">
              Code
            </label>
            <div className="border-2 text-sm border-orange-500 bg-white w-full p-2 rounded">
              <input
                className="outline-none w-full bg-transparent"
                type="text"
                name="code"
                placeholder="Discount code here Ex:'FALLSALE'"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 mb-6">
            <label className="text-xs text-gray-400" htmlFor="code">
              Description
            </label>
            <div className="border-2 text-sm border-orange-500 bg-white w-full p-2 rounded">
              <input
                className="outline-none w-full bg-transparent"
                type="text"
                name="description"
                placeholder="Discount description here Ex: 'fall sale'"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="text-xs text-gray-400" htmlFor="code">
              Percentage
            </label>
            <div className="border-2 text-sm border-orange-500 bg-white w-full p-2 rounded">
              <input
                className="outline-none w-full bg-transparent"
                type="number"
                name="percentage"
                placeholder="Discount percentage here Ex: '20'"
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
