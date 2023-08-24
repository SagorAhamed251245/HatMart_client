import PaymentInfo from "@/components/PaymentPage/PaymentInfo/PaymentInfo";
import UserInfo from "@/components/PaymentPage/UserInfo/UserInfo";
import React from "react";

const PaymentPage = () => {
  return (
    <>
      <section className="flex w-[90%] mx-auto bg-white min-h-screen ">
        <div className="w-1/2 bg-green-300">
          <UserInfo></UserInfo>
          {/* eikhnae user address componet thakbe */}
        </div>

        <div className="w-1/2 bg-green-500">
          {/* eikhnae payment componet thakbe */}
          <PaymentInfo></PaymentInfo>
        </div>
      </section>
    </>
  );
};

export default PaymentPage;
