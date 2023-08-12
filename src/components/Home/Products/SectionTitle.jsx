import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className="flex items-center my-5 ">
      <h3 className="text-2xl  mr-4 font-bold text-[#34B701]">{children}</h3>
      <div className="border-b flex-grow border-[#FF7B13]"></div>
    </div>
  );
};

export default SectionTitle;
