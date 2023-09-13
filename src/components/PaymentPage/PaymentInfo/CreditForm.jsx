"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useState } from "react";
import CheckoutFrom from "./CardPayment/CheckoutFrom";

const CreditForm = ({ totalAmount, allProducts }) => {
  const stripePromise = loadStripe(
    `pk_test_51NFA04JHKCQ45Flfl2cUjcu7vsxPaN1ySv1vhGoi4qOhOthupWevu0DaocmdMofi792wfmjs7vfURVBy4acRv42000Otknk4Ff`
  );
  /*  const handlePostRequest = async () => {
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
  }; */

  return (
    <>
      <div className="justify-center items-center">
        <button
          // Call the function on button click
          type="submit"
          className="bg-[#FF7B13] hover:bg-[#34B701] w-[30%] mt-4 text-white md:text-base text-sm px-[10px] md:px-2 font-medium py-1 rounded disabled:opacity-60"
        >
          Pay Now
        </button>
        {
          <>
            <Elements stripe={stripePromise}>
              <CheckoutFrom price={totalAmount} allProducts={allProducts}></CheckoutFrom>
            </Elements>
          </>
        }
      </div>
    </>
  );
};

export default CreditForm;
