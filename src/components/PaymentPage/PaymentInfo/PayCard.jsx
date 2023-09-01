"use client";
import React, { useState } from "react";

import PaymentForm from "./PaymentForm";
import Image from "next/image";
import paymentMethodImage from "@/data/paymentImage";

const PayCard = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelect = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  return (
    <div className="p-6 border shadow-md">
      <h2>Select Payment Method</h2>
      <div className="flex gap-2 bg-gray-100">
        {paymentMethodImage.map(({ icon, title }) => (
          <button
            key={title}
            className={`my-8 bg-none border-none  ${
              selectedPayment === title ? "border-2 bg-white" : ""
            }`}
            onClick={() => handlePaymentSelect(title)}
          >
            <Image
              src={icon}
              width={100}
              height={80}
              alt={title}
              className={`w-full object-cover ${
                selectedPayment === title ? "bg-white" : ""
              }`}
            ></Image>
          </button>
        ))}
      </div>
      {selectedPayment && (
        <PaymentForm
          paymentMethod={selectedPayment}
          isActive={selectedPayment !== null}
        />
      )}
    </div>
  );
};

export default PayCard;
