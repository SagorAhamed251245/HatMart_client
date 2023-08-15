"use client";

import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { BiTrashAlt } from "react-icons/bi";

const CartCard = () => {
  return (
    <div className="bg-white flex p-3 rounded-lg">
      {/* card image here */}
      <section className="relative h-[100px] w-[115px] rounded-lg border-2 border-slate-400">
        <Image
          fill
          alt="cart image"
          className="object-cover object-center rounded-lg"
          src={"https://i.ibb.co/37mp1RR/image.png"}
        ></Image>
      </section>

      {/* card info here */}
      <section className="px-3 flex justify-between">
        {/* item info */}
        <div>
          <h4 className="text-xl font-semibold">
            apple sider vinager pure fresh
          </h4>
          <div className="flex items-start mt-2 gap-2">
            <Rating
              placeholderRating={4.5}
              emptySymbol={<FaRegStar className="text-yellow-400" />}
              placeholderSymbol={<FaStar className="text-yellow-400" />}
              fullSymbol={<FaStar className="text-yellow-400" />}
              readonly
            />
            <span className="text-gray-500 text-sm font-medium">({4.5})</span>
          </div>
          <div>
            <span className="text-[#34B701] font-bold text-lg">$32.12</span>
          </div>
        </div>

        {/* counter + total */}

        <div className="flex gap-6 ml-10">
          <div className="flex flex-col justify-between items-end">
            {/* counter */}
            <div className="border-2 flex items-center font-semibold border-[#34B701] w-fit rounded">
              <button className="text-[#34B701] hover:bg-green-500 duration-200  active:bg-green-200  px-[10px] py-1">
                -
              </button>
              <span className="px-[10px] border-l-2 border-r-2 ">01</span>
              <button className="text-[#34B701] hover:bg-green-500 duration-200  active:bg-green-200  px-[10px] py-1">
                +
              </button>
            </div>

            {/* total */}
            <div>

              <div className="text-center inline-block text-slate-500 mr-10">
                <span className="block text-sm">Total</span>
                <span className=" font-semibold">$30</span>
              </div>

              <div className="text-center inline-block text-slate-500">
                <span className="block text-sm">Unit</span>
                <span className=" font-semibold">kg</span>
              </div>

            </div>

          </div>

          <button className="bg-red-500 hover:bg-red-400 active:bg-red-600 text-white p-3 text-2xl h-fit rounded-full my-auto">
            <BiTrashAlt />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CartCard;
