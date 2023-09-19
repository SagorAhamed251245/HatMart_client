import PayCard from "@/components/PaymentPage/PaymentInfo/PayCard";
import PaymentTotal from "@/components/PaymentPage/PaymentInfo/paymentTotal";
import React from "react";

const page = ({ searchParams }) => {
  const totalAmount = parseFloat(searchParams.totalAmount);
  const allProducts = JSON.parse(searchParams.allProducts);
  return (
    <div className="flex flex-col sm:flex-row w-[90%] mx-auto min-h-screen gap-3 mb-5  ">
      <div className="md:w-[60%]">
        <PayCard totalAmount={totalAmount} allProducts={allProducts}></PayCard>
      </div>
      <div className=" md:w-[40%]">
        <PaymentTotal totalAmount={searchParams.totalAmount}></PaymentTotal>
      </div>
    </div>
  );
};

export default page;
