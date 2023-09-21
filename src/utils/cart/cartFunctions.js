"use client";
export const deleteCartItems = () => {
  JSON.parse(localStorage.removeItem("cartItems"));
};
