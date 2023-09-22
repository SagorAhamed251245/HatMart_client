"use client";

import React, { useState } from "react";

const FaQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      question: "What is Hatmart, and where are you located?",
      answer:
        "Hatmart is your neighborhood grocery shop that provides a wide range of high-quality groceries and essential items. We are located at 13/1, Road No-5, Mirpur Road. Come visit us!",
    },
    {
      question: "What are your store hours?",
      answer:
        "Our store is open 7 of the Week from Opening Time 8.00am to Closing Time 10.00pm. We are here to serve you during these hours.",
    },
    {
      question: "Do you offer online ordering and delivery?",
      answer:
        "Yes, we do! You can conveniently shop online through our website Website: https://hat-mart-client.vercel.app, and we offer both pickup and delivery options. Check our online store for details.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit cards, and mobile payment methods like Apple Pay and Google Pay for in-store and online purchases.",
    },
    {
      question: "Can I return or exchange products?",
      answer:
        "Absolutely. If you are not satisfied with your purchase, please return it within 30 days with the receipt, and we'll be happy to offer a refund or exchange.",
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
      <div className="p-4 mt-10 lg:pl-5 pl-0">
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

export default FaQ;
