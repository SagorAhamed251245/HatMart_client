"use client";

import React, { useEffect, useRef, useState } from "react";

const CartCounter = ({
  _id,
  setTotal,
  cartItem,
  decreaseAmount,
  increaseAmount,
}) => {
  const [quantity, setQuantity] = useState(1);

  const finalPrice = parseFloat((parseFloat(cartItem?.price) - (parseFloat(cartItem?.price)*(parseFloat(cartItem?.discount_percent) / 100))).toFixed(2));


  const counter = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];
      const foundCartItem = storedCartItems.find((item) => item._id === _id);

      if (foundCartItem) {
        setQuantity(foundCartItem.quantity);
        const totalCardPrice = parseFloat(
          (foundCartItem.quantity * parseFloat(finalPrice)).toFixed(2)
        );
        setTotal(totalCardPrice);
      }
    } else {
      console.log("We are running on the server");
    }
  }, []);

  const handleIncrement = (_id) => {
    const itemsFromLS = JSON.parse(localStorage.getItem("cartItems")) || [];

    const index = itemsFromLS.findIndex((item) => item._id === _id);

    if (index !== -1) {
      itemsFromLS[index].quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(itemsFromLS));

      const updatedQuantity = quantity + 1;
      setQuantity(updatedQuantity);

      const totalPrice = updatedQuantity * parseFloat(finalPrice);
      const formattedTotalPrice = parseFloat(totalPrice.toFixed(2));
      setTotal(formattedTotalPrice);

      increaseAmount(finalPrice);
    } else {
      console.log("Item with the id not found.");
    }
  };

  const handleDecrement = (_id) => {
    if (quantity === 1) {
      return;
    }

    const itemsFromLS = JSON.parse(localStorage.getItem("cartItems")) || [];

    const index = itemsFromLS.findIndex((item) => item._id === _id);

    if (index !== -1) {
      itemsFromLS[index].quantity -= 1;
      localStorage.setItem("cartItems", JSON.stringify(itemsFromLS));

      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);

      const totalPrice = updatedQuantity * parseFloat(finalPrice);
      const formattedTotalPrice = parseFloat(totalPrice.toFixed(2));
      setTotal(formattedTotalPrice);

      decreaseAmount(finalPrice);
    } else {
      console.log("Item with the id not found.");
    }
  };

  return (
    <div className="border-2  font-semibold border-[#34B701] w-fit rounded">
      <button
        onClick={() => handleDecrement(_id)}
        className="text-[#34B701] hover:bg-green-200 duration-200  active:bg-green-200 px-[5px] md:px-[10px] py-1"
      >
        -
      </button>
      <span
        ref={counter}
        className="md:px-[10px] px-[5px] border-l-2 border-r-2"
      >
        {quantity}
      </span>
      <button
        onClick={() => handleIncrement(_id)}
        className="text-[#34B701] hover:bg-green-200 duration-200  active:bg-green-200 px-[5px] md:px-[10px] py-1"
      >
        +
      </button>
    </div>
  );
};

export default CartCounter;
