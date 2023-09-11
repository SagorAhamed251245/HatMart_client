"use client";
import axios from "axios";
import React, { useState } from "react";


const CreditForm = () => {


  const handlePostRequest = async () => {
    try {
      const requestBody = {
        items: [
          {
            title: "Product 1",
            image: "image-url-1",
            _id: "product-1-id",
            price: 10.99,
            quantity: 2,
          },
          // Add more items as needed
        ],
        shippingInfo: {
          user: "sagorahamed@gmail.com",
        },
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APIS}/cartPayment`,
        requestBody
      ); // Updated endpoint
      setResponse(response.data);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  return (
    <>
      <div className="justify-center items-center">
        <button
          onClick={handlePostRequest} // Call the function on button click
          type="submit"
          className="bg-[#FF7B13] hover:bg-[#34B701] w-[30%] mt-4 text-white md:text-base text-sm px-[10px] md:px-2 font-medium py-1 rounded disabled:opacity-60"
        >
          Pay Now
        </button>
      </div>

      
    </>
  );
};

export default CreditForm;
