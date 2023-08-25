import React from "react";

const DiscountSection = () => {

    const handleDiscount = e => {
        e.preventDefault()
        const form = e.target;
        const code = form.discountCode.value;
        // console.log(code)

    }

  return (
    <form onSubmit={handleDiscount}>
      <input
        type="text"
        name="discountCode"
        className="border-2 border-orange-400 my-6 w-full py-2 px-3 rounded-lg"
        placeholder="Enter Your Coupon Code"
      />
      <button
        type="submit"
        className="btn bg-[#34b701] text-white  hover:bg-orange-600"
      >
        Get Discount
      </button>
    </form>
  );
};

export default DiscountSection;
