"use client";
import CartCard from "@/components/Cart/CartCard";
import React, { useEffect, useState } from "react";

const AddToCart = () => {
  let Price = "32.12";
  const name = "apple sider vinager pure fresh";
  const [total, setTotal] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('cartItem.json')
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  if (!total) {
    setTotal(Price);
  }
  const updateTotal = (total) => {
    setTotal(total);
  };
  // price will change in future

  return (
    <div className="mt-40 mb-20 rounded max-w-[1380px] mx-auto bg-slate-100 p-10 ">
      {/* page title here */}
      <div>
        <h3 className="text-4xl font-semibold mb-2">Cart</h3>
        <p className="text-sm">
          In here Continue with the purchase add or reduce items or delete
          items.
        </p>
      </div>
      {/* This is the item and total payment section */}
      <section className="my-10 flex md:flex-row justify-between flex-col gap-10">
        {/* card here */}
        <section className="w-3/4 flex flex-col items-start">
          {
            data.map(cartItem => <CartCard key={cartItem.id} data={data} cartItem={cartItem}></CartCard>)
          }
        </section>
        {/* total payment here */}
        <section className="bg-green-100 text-center rounded-lg p-3 w-[350px]">
          <h3 className="text-2xl font-semibold">Total Payment</h3>
          <table className="table-fixed m-4 text-start flex items-center justify-center">
            <tbody className="">

              <tr className="border-b ">
                <td className="pr-6 w-96 font-bold">Product </td>
                <td className="font-bold">Price</td>
              </tr>
              
              <tr>
                {/* <td className="pr-6 overflow-hidden">{name.length > 24 ? (name.substring(0,24) + '..') : name}</td>
                <td>${total}</td> */}
              </tr>

              <tr className=" border-t-2  border-black">
                <td className="pr-6 font-semibold">Total Price</td>
                <td>$300</td>
              </tr>


            </tbody>
          </table>
        </section>
      </section>
    </div>
  );
};

export default AddToCart;
