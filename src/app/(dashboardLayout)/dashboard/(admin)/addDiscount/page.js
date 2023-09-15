import AddCoupon from "@/components/Dashboard/Admin/AddDiscountCoupon/AddCoupon";
import ExpiredCoupon from "@/components/Dashboard/Admin/AddDiscountCoupon/ExpiredCoupon";
import ViewCoupon from "@/components/Dashboard/Admin/AddDiscountCoupon/ViewCoupon";
import addCoupon from "@/utils/coupon/addCoupon";
import getCoupon from "@/utils/coupon/getCoupon";
import React from "react";

const addDiscountPage = async () => {
  // const discounts = await getCoupon()
  // TODO: add a get discount api here
  const discounts = [
    {
      _id: 1,
      code: "SUMMER2023",
      discount: 0.15, // 15% discount
      description: "Summer Sale 2023",
    },
    {
      _id: 2,
      code: "FALLSALE",
      discount: 0.1, // 10% discount
      description: "Fall Sale",
    },
    {
      _id: 3,
      code: "HOLIDAYSALE",
      discount: 0.2, // 20% discount
      description: "Holiday Sale",
    },
    {
      _id: 3,
      code: "HOLIDAYSALE",
      discount: 0.2, // 20% discount
      description: "Holiday Sale",
    },
    {
      _id: 3,
      code: "HOLIDAYSALE",
      discount: 0.2, // 20% discount
      description: "Holiday Sale",
    },
    {
      _id: 3,
      code: "HOLIDAYSALE",
      discount: 0.2, // 20% discount
      description: "Holiday Sale",
    },
    // Add more discount codes as needed
  ];
  //TODO: add a get expiredDiscount api here
  const expiredDiscounts = [
    {
      code: "EXPIRED10",
      discount: 0.1, // 10% discount
      description: "May Sale",
      expirationDate: "2022-12-31", // Expired on December 31, 2022
    },
    {
      code: "OLD20",
      discount: 0.2, // 20% discount
      description: "Black Friday Sale",
      expirationDate: "2021-06-30", // Expired on June 30, 2021
    },
    {
      code: "DISCOUNT50",
      discount: 0.5, // 50% discount
      description: "Eid ul adha Sale",
      expirationDate: "2023-01-15", // Expired on January 15, 2023
    },
  ];

  return (
    <>
      <div className="flex md:flex-row flex-col gap-6">
        <AddCoupon />
        <ViewCoupon discounts={discounts} />
      </div>
      <ExpiredCoupon expiredDiscounts={expiredDiscounts} />
    </>
  );
};

export default addDiscountPage;
