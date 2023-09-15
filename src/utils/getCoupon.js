import React from "react";

const getCoupon = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/coupon`, {
    cache: "no-cache",
  });
  return res.json();
};

export default getCoupon;
