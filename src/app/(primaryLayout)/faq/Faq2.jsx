"use client";

import React, { useState } from "react";

const Faq2 = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      question: "Can I return or exchange products?",
      answer:
        "Absolutely. If you are not satisfied with your purchase, please return it within 30 days with the receipt, and we'll be happy to offer a refund or exchange.",
    },
    {
      question: "Do you offer discounts or loyalty programs?",
      answer:
        "Yes, we have special discounts and promotions regularly. You can also join our loyalty program to earn points and enjoy exclusive offers. Check our website or ask our staff for details.",
    },
    {
      question: "Are your products locally sourced or organic?",
      answer:
        "We strive to offer a mix of locally sourced and organic products. Look for the 'Local' and 'Organic' labels on our products for more information.",
    },
    {
      question: "What safety measures are in place regarding COVID-19?",
      answer:
        "Your safety is our priority. We follow all recommended health and safety guidelines, including regular sanitization, social distancing, and mask requirements. Learn more on our website.",
    },
    {
      question: "Can I suggest products or brands for Hatmart to carry?",
      answer:
        "Of course! We value your input. Feel free to reach out to us with your product suggestions or requests, and we'll do our best to accommodate your needs.",
    },
  ];

  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };
  return (
    <div>
      <div className="max-w-xl mx-auto p-4 mt-10">
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border rounded p-2 cursor-pointer dark:text-white"
              onClick={() => toggleItem(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold dark:text-white">
                  {item.question}
                </h3>
                <div className="faq-arrow dark:text-white">
                  {openItem === index ? "▼" : "▶"}
                </div>
              </div>
              {openItem === index && (
                <div className="mt-2 text-gray-700 dark:text-white">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq2;
