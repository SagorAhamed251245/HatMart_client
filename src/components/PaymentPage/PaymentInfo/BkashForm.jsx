"use client";
import React, { useState } from "react";
import BkashModal from "../Modal/BkashModal";

const BkashForm = ({ totalAmount, allProducts }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="submit"
        className="bg-[#FF7B13] hover:bg-[#34B701] w-40 text-white md:text-base text-sm px-[10px] md:px-2 font-medium py-1 rounded disabled:opacity-60"
      >
        Pay with bkash
      </button>

      <BkashModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        totalAmount={totalAmount}
        allProducts={allProducts}
      />
    </div>
  );
};

export default BkashForm;
