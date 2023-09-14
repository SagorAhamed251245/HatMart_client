import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className="flex items-center lg:my-5 md:my-3 sm:my-2">
      <h3 className="lg:text-2xl md:text-xl sm:text-sm mr-4 font-bold text-[#34B701]">
        {children}
      </h3>
      <div className="border-b flex-grow border-[#FF7B13]"></div>
    </div>
  );
};

export default SectionTitle;
