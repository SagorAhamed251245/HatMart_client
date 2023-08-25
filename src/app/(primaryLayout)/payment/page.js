import PaymentInfo from "@/components/PaymentPage/PaymentInfo/PaymentInfo";
import UserInfo from "@/components/PaymentPage/UserInfo/UserInfo";
import React from "react";

const PaymentPage = () => {
  return (
    <>
      <section className="flex flex-col sm:flex-row w-[90%] mx-auto min-h-screen gap-3 mb-5  ">
        <div className="sm:w-[100%] md:w-[60%]">
          <UserInfo></UserInfo>
          {/* eikhnae user address componet thakbe */}
        </div>

        <div className="sm:w-[100%] md:w-[40%]">
          {/* eikhnae payment componet thakbe */}
          <PaymentInfo></PaymentInfo>
        </div>
      </section>
    </>
  );
};

export default PaymentPage;
