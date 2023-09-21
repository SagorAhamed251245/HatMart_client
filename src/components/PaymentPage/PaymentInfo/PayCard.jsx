"use client";
import React, { useState } from "react";

import PaymentForm from "./PaymentForm";
import Image from "next/image";
import paymentMethodImage from "@/data/paymentImage";

const PayCard = ({ totalAmount, allProducts }) => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelect = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  return (
    <div className="p-6 border shadow-md dark:text-white rounded">
      <h2 className="font-medium text-lg">Select a Payment Method</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-5">
        {paymentMethodImage.map(({ icon, title }) => (
          <button
            key={title}
            className={` bg-none border-none  ${
              selectedPayment === title ? "border-2" : ""
            }`}
            onClick={() => handlePaymentSelect(title)}
          >
            <Image
              src={icon}
              width={100}
              height={80}
              alt={title}
              className={`h-20 w-full border rounded p-2${
                selectedPayment === title ? " !border-green-400 " : ""
              }`}
            ></Image>
          </button>
        ))}
      </div>
      {selectedPayment && (
        <PaymentForm
          totalAmount={totalAmount}
          allProducts={allProducts}
          paymentMethod={selectedPayment}
          isActive={selectedPayment !== null}
        />
      )}
    </div>
  );
};

export default PayCard;
