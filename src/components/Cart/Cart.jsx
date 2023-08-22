"use client";
import CartCard from "@/components/Cart/CartCard";
import React, { useEffect, useState } from "react";


const Cart = ({products}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [data, setData] = useState([]);
    // cartItems store localstorage raw data
    const [cartItems, setCartItems] = useState([]);


// get cart data from localstorage
useEffect(() => {
    if (typeof window !== 'undefined') {
        console.log('We are running on the client');
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        setCartItems(storedCartItems || []);
        console.log(storedCartItems);
    } else {
        console.log('We are running on the server');
    }
}, []);

// separate the localstorage data from the id
    const cartItemsId = cartItems.map(cartItem => cartItem._id)

    const selectedCartItems = [];

    //finding cart data from server with localstorage id; 
    for (let i = 0; i < cartItemsId.length; i++) {
        const id = cartItemsId[i];
        const cartItem = products.find(item => item._id === id);
        if (cartItem) {
            selectedCartItems.push(cartItem);
        }
        else {
            console.log('not found')
        }
    }
    
    console.log(selectedCartItems)
    
    useEffect(() => {
        fetch("cartItem.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []); 
    
    
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
        <section className="bg-green-100 text-center rounded-lg p-3 md:w-[350px] w-full">
          <h3 className="text-2xl font-semibold">Total Payment</h3>
          <table className="table-fixed m-4 text-start flex items-center justify-center">
            <tbody className="">
              <tr className="border-b ">
                <td className="pr-6 w-96 font-bold">Product </td>
                <td className="font-bold">Price</td>
              </tr>

              {/* <tr>
                <td className="pr-6 overflow-hidden">{name.length > 24 ? (name.substring(0,24) + '..') : name}</td>
                <td>${total}</td>
              </tr> */}

              <tr className=" border-t-2  border-black">
                <td className="pr-6 font-semibold">Total Price</td>
                <td>${totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </div>
  );
};

export default Cart;
