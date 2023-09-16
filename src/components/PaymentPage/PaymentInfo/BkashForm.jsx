"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BkashModal from "../Modal/BkashModal";

const BkashForm = ({totalAmount}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Here you can handle form submission and API calls
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="submit"
        className="bg-[#FF7B13] hover:bg-[#34B701] w-[30%] text-white md:text-base text-sm px-[10px] md:px-2 font-medium py-1 rounded disabled:opacity-60"
      >
        Pay with bkash
      </button>

      <BkashModal isOpen={isOpen} setIsOpen={setIsOpen} totalAmount={totalAmount} />
    </div>
  );
};

export default BkashForm;
