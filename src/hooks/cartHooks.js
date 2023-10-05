"use client";
import { useEffect, useState } from "react";

const CartHooks = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const getItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(getItems);
    }
  }, []);
  return cartItems;
};

export default CartHooks;
