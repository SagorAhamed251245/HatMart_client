import React from "react";
import FaQ from "./FaQ";
import FaqImg from "./FaqImg";
import Faqimg2 from "./Faqimg2";
import Faq2 from "./Faq2";

const FaqPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h3 className="text-2xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h3>
      <div className="flex flex-col lg:flex-row justify-center gap-3">
        <div className="flex flex-col lg:w-1/2 gap-3">
          <FaqImg></FaqImg>
          <Faq2></Faq2>
        </div>
        <div className="flex flex-col lg:w-1/2 gap-3">
          <FaQ />
          <Faqimg2 />
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
