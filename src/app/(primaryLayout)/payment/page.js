import CheckBox from "@/components/PaymentPage/CheckBox";
import CheckoutForm from "@/components/PaymentPage/CheckoutForm";
import React from "react";

const PaymentPage = () => {
  return (
    <div className="bg-green-100 w-[90%] mx-auto">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Sell Views</div>
        <div className="stat-value text-secondary">2.6M</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold">Payment Here!</h1>
            <p className="py-6">
              We are here for your best Payment Option. Click Your easy method.
            </p>
          </div>

          {/* <div><CheckoutForm/></div> */}
          <CheckBox />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
