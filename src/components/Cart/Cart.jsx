"use client";
import CartCard from "@/components/Cart/CartCard";
import React, { useEffect, useState } from "react";
import DiscountSection from "./DiscountSection";
import Link from "next/link";

const Cart = ({ products }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartData, setCartData] = useState([]);

  // onclick delete sigleCart item==================================================================================
  const deleteCartItem = (itemId) => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));

    // Find the index of the item to delete
    const itemIndex = storedCartItems.findIndex((item) => item._id === itemId);

    if (itemIndex !== -1) {
      storedCartItems.splice(itemIndex, 1);

      localStorage.setItem("cartItems", JSON.stringify(storedCartItems));

      setCartData(storedCartItems);
    }
  };

  // TODO:// Newly added changes needs some fix
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(storedCartItems);
    }
  }, [cartData]);

  useEffect(() => {
    const cartItemsId = cartItems.map((cartItem) => cartItem._id);
    const cartItemsQuantity = cartItems.map((cartItem) => cartItem.quantity);
    const selectedCartItems = [];
    let subTotalPrice = 0;

    for (let i = 0; i < cartItemsId.length; i++) {
      const id = cartItemsId[i];
      const quantity = cartItemsQuantity[i];
      const cartItem = products.find((item) => item._id === id);
      if (cartItem) {
        selectedCartItems.push(cartItem);
        subTotalPrice += cartItem.price * quantity;
      } else {
        console.log("Item not found:", id);
      }
    }

    setCartData(selectedCartItems);
    setTotalPrice(subTotalPrice.toFixed(2));
  }, [cartItems, products]);
  // TODO:// Newly added changes needs some fix

  // increase price
  const increaseAmount = (price) => {
    const totalPriceData = parseFloat((Number(totalPrice) + price).toFixed(2)); // Calculate the new total
    setTotalPrice(totalPriceData); // Update the state
  };

  // decrease price
  const decreaseAmount = (price) => {
    const totalPriceData = parseFloat((Number(totalPrice) - price).toFixed(2)); // Calculate the new total
    setTotalPrice(totalPriceData); // Update the state
  };
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  return (
    <div className="md:my-16 md:mb-20 mb-10 rounded w-full lg:max-w-[1380px] mx-auto bg-slate-100 md:p-10 p-3 ">
      {/* page title here */}
      <div>
        <h3 className="text-4xl font-semibold mb-2">Cart</h3>
        <p className="text-sm">
          In here Continue with the purchase add or reduce items or delete
          items.
        </p>
      </div>
      {/* This is the item and total payment section */}
      <section className="my-10 flex md:flex-row justify-center flex-col gap-10">
        {/* card here */}
        <section className="md:w-3/4 w-full flex flex-col items-center">
          {cartData.map((cartItem) => (
            <CartCard
              key={cartItem._id}
              increaseAmount={increaseAmount}
              decreaseAmount={decreaseAmount}
              cartItem={cartItem}
              deleteCartItem={deleteCartItem}
            ></CartCard>
          ))}
        </section>
        {/* total payment here */}
        <section className="bg-white text-center rounded-lg p-3 lg:w-1/3 w-full">
          {/* card title */}
          <h4 className="my-5 text-2xl font-bold">Order Summary</h4>
          {/* table */}
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr>
                  <td className="text-start pl-16">SubTotal :</td>
                  <td className="text-end pr-16 ">
                    $ {totalPrice ? totalPrice : 0}
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td className="text-start pl-16">Shipping :</td>
                  <td className="text-end pr-16 ">$ {0}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td className="text-start pl-16">Tax :</td>
                  <td className="text-end pr-16 ">$ {0}</td>
                </tr>
                <tr className="border-t-2 border-gray-400">
                  <td className="text-start text-lg font-semibold pl-16">
                    Total{" "}
                  </td>
                  <td className="text-end text-lg font-semibold pr-16 ">
                    $ <span>{totalPrice ? totalPrice : 0}</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <Link
              href={{
                pathname: "/payment",
                query: {
                  productId: JSON.stringify(cartItems),
                },
              }}
              className="btn w-full bg-[#34B701] hover:bg-green-500 duration-300 text-white my-6"
            >
              Payment
            </Link>

            <hr />
            {/* discount section */}
            <DiscountSection
              totalPrice={totalPrice}
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Cart;
