import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NagadModal from "../Modal/NagadModal";

const NogodForm = ({ onConfirm, totalAmount, allProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    onConfirm(); // Call the onConfirm callback
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="submit"
        className="bg-[#FF7B13] hover:bg-[#34B701] text-white md:text-base text-sm px-[10px] md:px-4 font-medium w-40 py-1 rounded disabled:opacity-60 "
      >
        Pay with nagad
      </button>

      <NagadModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        totalAmount={totalAmount}
        allProducts={allProducts}
      />
    </>
  );
};

export default NogodForm;
