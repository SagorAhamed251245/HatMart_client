import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NagadModal from "../Modal/NagadModal";

const NogodForm = ({ onConfirm }) => {
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
        className="bg-[#FF7B13] hover:bg-[#34B701] w-[50%] text-white md:text-base text-sm px-[10px] md:px-4 font-medium py-1 rounded disabled:opacity-60 "
      >
        Confirm Nagad Payment
      </button>

      <NagadModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default NogodForm;
