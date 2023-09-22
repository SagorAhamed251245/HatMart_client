import Link from "next/link";
import React from "react";

const BuyNowBtn = ({ stock_quantity, _id, totalPrice }) => {
  let cartItems = [{ _id, quantity: 1 }];
  let numbers = 0;
  return (
    <>
      <Link
        href={{
          pathname: `/payment`,
          query: {
            productId: JSON.stringify(cartItems),
            totalPrice: totalPrice ? totalPrice.toString() : numbers.toString,
          },
        }}
      >
        <button
          disabled={stock_quantity == 0}
          className="flex justify-center items-center gap-2 bg-[#ff6347cc]  text-white px-6 py-1.5 rounded   disabled:opacity-60 hover:bg-[#FF7B13]"
        >
          Buy Now
        </button>
      </Link>
    </>
  );
};

export default BuyNowBtn;
