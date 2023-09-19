// PaymentForm.js
import React from "react";
import BkashForm from "./BkashForm";
import RocketForm from "./RocketForm";
import CodForm from "./CodForm";
import NogodForm from "./NogodForm";
import CreditForm from "./CreditForm";

const PaymentForm = ({ paymentMethod, isActive, totalAmount, allProducts }) => {
  // Add the form content based on the paymentMethod
  let formContent = null;

  if (paymentMethod === "bkash") {
    formContent = (
      <BkashForm
        totalAmount={totalAmount}
        allProducts={allProducts}
      ></BkashForm>
    );
  } else if (paymentMethod === "cod") {
    formContent = <CodForm></CodForm>;
  } else if (paymentMethod === "nogod") {
    formContent = (
      <NogodForm
        totalAmount={totalAmount}
        allProducts={allProducts}
      ></NogodForm>
    );
  } else if (paymentMethod === "master") {
    formContent = (
      <CreditForm
        totalAmount={totalAmount}
        allProducts={allProducts}
      ></CreditForm>
    );
  }

  return (
    <div className={`mt-4 ${isActive ? "bg-white" : ""}`}>{formContent}</div>
  );
};

export default PaymentForm;
