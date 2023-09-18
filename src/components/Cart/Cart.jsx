"use client";
import CartCard from "@/components/Cart/CartCard";
import React, { useEffect, useState } from "react";
import DiscountSection from "./DiscountSection";
import Link from "next/link";
import { MdOutlinePayment } from "react-icons/md";

const Cart = ({ products }) => {
  let numbers = 0;
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [discountMoney, setDiscountMoney] = useState(0);

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];

      if (!isEqual(storedCartItems, cartItems)) {
        setCartItems(storedCartItems);
        setCartData(storedCartItems);
      }
    }
  }, [cartData]);

  function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
      if (
        arr1[i]._id !== arr2[i]._id ||
        arr1[i].quantity !== arr2[i].quantity
      ) {
        return false;
      }
    }

    return true;
  }

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
        subTotalPrice +=
          parseFloat(
            (
              parseFloat(cartItem?.price) -
              parseFloat(cartItem?.price) *
                (parseFloat(cartItem?.discount_percent) / 100)
            ).toFixed(2)
          ) * quantity;
      } else {
        console.log("Item not found:", id);
      }
    }

    setCartData(selectedCartItems);
    setTotalPrice(subTotalPrice.toFixed(2));
  }, [cartItems, products]);

  // increase price
  const increaseAmount = (price) => {
    const totalPriceData = parseFloat((Number(totalPrice) + price).toFixed(2));
    setTotalPrice(totalPriceData);
  };

  // decrease price
  const decreaseAmount = (price) => {
    const totalPriceData = parseFloat((Number(totalPrice) - price).toFixed(2));
    setTotalPrice(totalPriceData);
  };

  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  return (
    <div className="md:my-16 md:mb-20 mb-10 rounded w-full lg:w-[90%] mx-auto md:p-10 p-3 ">
      {/* page title here */}
      <div>
        <h3 className="text-4xl font-semibold mb-2">Cart</h3>
        <p className="text-sm">
          In here Continue with the purchase add or reduce items or delete
          items.
        </p>
      </div>
      {/* This is the item and total payment section */}
      <section className="my-10 flex md:flex-row justify-center md:py-6 flex-col gap-10">
        {/* card here */}
        <section className="md:w-3/4 w-full flex h-full md:h-[521px] md:py-6 scrollbar md:overflow-y-auto flex-col items-center">
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
        <section className="bg-white dark:bg-transparent text-center shadow-lg rounded-lg p-3 md:h-[521px] h-full md:w-1/3 w-full">
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
                  <td className="text-start pl-16">Discount :</td>
                  <td className="text-end pr-16 ">$ {discountMoney}</td>
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
                  totalPrice: totalPrice
                    ? totalPrice.toString()
                    : numbers.toString,
                },
              }}
              className="btn w-full bg-[#34B701] hover:bg-green-500 duration-300 text-white my-6"
            >
              <MdOutlinePayment />
              Payment
            </Link>

            <hr />
            {/* discount section */}
            <DiscountSection
              totalPrice={totalPrice}
              setDiscountMoney={setDiscountMoney}
              setTotalPrice={setTotalPrice}
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Cart;
