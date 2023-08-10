import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className="flex items-center my-5">
      <h3 className="text-2xl font-medium text-gray-700  mr-4">{children}</h3>
      <div className="border-b flex-grow border-gray-300"></div>
    </div>
  );
};

export default SectionTitle;
