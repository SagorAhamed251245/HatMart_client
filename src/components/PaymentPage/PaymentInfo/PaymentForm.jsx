// PaymentForm.js
import React from "react";
import BkashForm from "./BkashForm";
import RocketForm from "./RocketForm";
import CodForm from "./CodForm";
import NogodForm from "./NogodForm";
import CreditForm from "./CreditForm";

const PaymentForm = ({ paymentMethod, isActive }) => {
  // Add the form content based on the paymentMethod
  let formContent = null;

  if (paymentMethod === "bkash") {
    formContent = <BkashForm></BkashForm>;
  } else if (paymentMethod === "rocket") {
    formContent = <RocketForm></RocketForm>;
  } else if (paymentMethod === "cod") {
    formContent = <CodForm></CodForm>;
  } else if (paymentMethod === "nogod") {
    formContent = <NogodForm></NogodForm>;
  } else if (paymentMethod === "master") {
    formContent = <CreditForm></CreditForm>;
  }

  return (
    <div className={`mt-4 ${isActive ? "bg-white" : ""}`}>{formContent}</div>
  );
};

export default PaymentForm;