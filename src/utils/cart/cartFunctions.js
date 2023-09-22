"use client";
export const deleteCartItems = () => {
  JSON.parse(localStorage.removeItem("cartItems"));
};
export const getCartItems = () => {
  if (typeof window !== 'undefined') {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return cartItems;
  }
  
};
