"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { BiTrashAlt } from "react-icons/bi";

const CartCard = ({ updateTotal, cartItem }) => {
  const [quantity, setQuantity] = useState(cartItem?.quantity);
  const [total, setTotal] = useState(0);
  const totalPrice = useRef();
  const counter = useRef();

  useEffect(() => {
    const newTotal = quantity * parseFloat(cartItem?.price);
    setTotal(newTotal);
    updateTotal(newTotal); // Send the new total to the parent when the component mounts
  }, []);
  
  const handlePlusCounter = () => {
    setQuantity(quantity + 1);
    const totalPrice = (quantity + 1) * parseFloat(cartItem?.price);
    
    const formattedTotalPrice = parseFloat(totalPrice.toFixed(2));
    setTotal(formattedTotalPrice);
    updateTotal(total)
  };
  const handleMinusCounter = () => {
    if (quantity == 1) {
      return;
    }
    setQuantity(quantity - 1);
    const totalPrice = (quantity - 1) * parseFloat(cartItem.price);
    
    const formattedTotalPrice = parseFloat(totalPrice.toFixed(2));

    setTotal(formattedTotalPrice);
    updateTotal(total)
  };


  return (
    <div className="bg-white my-3 flex p-3 md:w-[600px] w-full rounded-lg">
      {/* card image here */}
      <section className="relative h-[100px] w-[100px] rounded-lg border-2 border-slate-400">
        <Image
          fill
          alt="cart image"
          className="object-cover object-center rounded-lg"
          src={cartItem?.image}
        ></Image>
      </section>

      {/* card info here */}
      <section className="px-3 flex justify-between w-full">
        {/* item info */}
        <div>
          <h4 className="text-xl font-semibold">{cartItem?.name}</h4>
          <div className="mt-2">
            <Rating
              placeholderRating={cartItem?.rating}
              emptySymbol={<FaRegStar className="text-yellow-400" />}
              placeholderSymbol={<FaStar className="text-yellow-400" />}
              fullSymbol={<FaStar className="text-yellow-400" />}
              readonly
            />
            <span className="text-gray-500 text-sm font-medium">
              ({cartItem?.rating})
            </span>
          </div>
          <div>
            <span className="text-[#34B701] font-bold text-lg">
              ${cartItem?.price}
            </span>
          </div>
        </div>

        {/* counter + total */}

        <div className="gap-6 md:ml-10 flex">
          <div className="flex flex-col justify-between items-center">
            {/* counter */}
            <div className="border-2  font-semibold border-[#34B701] w-fit rounded">
              <button
                onClick={() => handleMinusCounter()}
                className="text-[#34B701] hover:bg-green-500 duration-200  active:bg-green-200 px-[5px] md:px-[10px] py-1"
              >
                -
              </button>
              <span ref={counter} className="md:px-[10px] px-[5px] border-l-2 border-r-2">
                {quantity}
              </span>
              <button
                onClick={() => handlePlusCounter()}
                className="text-[#34B701] hover:bg-green-500 duration-200  active:bg-green-200 px-[5px] md:px-[10px] py-1"
              >
                +
              </button>
            </div>

            {/* total */}
            <div>
              
              <div className="text-center inline-block text-slate-500 ">
                <span className="block text-sm">Total</span>
                <span>
                  $
                  <span ref={totalPrice} className="total font-semibold">
                    {total}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <button className="bg-[#FF7218] hover:bg-red-400 active:bg-red-600 text-white p-3 text-2xl h-fit rounded-full my-auto">
            <BiTrashAlt />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CartCard;
