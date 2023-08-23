"use client";
import CartCard from "@/components/Cart/CartCard";
import React, { useEffect, useState } from "react";

const Cart = ({ products }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState([]);
  // cartItems store localstorage raw data
  const [cartItems, setCartItems] = useState([]);

  // get cart data from localstorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
      setCartItems(storedCartItems || []);
      console.log(storedCartItems);
    } else {
    }
  }, []);

  // separate the localstorage object id from Data
  const cartItemsId = cartItems.map((cartItem) => cartItem._id);

  const selectedCartItems = [];

  //finding cart data from server with localstorage id;
  for (let i = 0; i < cartItemsId.length; i++) {
    const id = cartItemsId[i];
    const cartItem = products.find((item) => item._id === id);
    if (cartItem) {
      selectedCartItems.push(cartItem);
    } else {
      console.log("not found");
    }
  }

  const updateTotal = (subTotal) => {
    setTotalPrice((prevTotalPrice) => {
      const newTotal = prevTotalPrice + subTotal;
      // console.log("New Total Price:", subTotal);
      return newTotal;
    });
  };

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
          {selectedCartItems.map((cartItem) => (
            <CartCard
              key={cartItem._id}
              updateTotal={updateTotal}
              cartItem={cartItem}
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
                  <td className="text-end pr-16 ">$ 100</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td className="text-start pl-16">Shipping :</td>
                  <td className="text-end pr-16 ">$ 200</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td className="text-start pl-16">Tax :</td>
                  <td className="text-end pr-16 ">$ 1000</td>
                </tr>
                <tr className="border-t-2 border-gray-400">
                <td className="text-start text-lg font-semibold pl-16">Total </td>
                  <td className="text-end text-lg font-semibold pr-16 ">$ 1000</td>
                </tr>
              </tbody>
            </table>
                    <button className="btn w-full bg-[#34B701] hover:bg-green-500 duration-300 text-white my-6">Payment</button>

                    <hr />

                    <form>
                        <input type="text" className="border-2 border-orange-400 my-6 w-full py-2 px-3 rounded-lg" placeholder="Enter Your Coupon Code" />
                        <button type="submit" className="btn bg-[#34b701] text-white  hover:bg-orange-600">Get Discount</button>
                    </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Cart;
