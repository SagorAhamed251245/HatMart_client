"use client";

import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const CartCard = () => {
  return (
    <div className="bg-slate-200 flex p-3 rounded-lg">
      {/* card image here */}
      <section className="relative h-[100px] w-[100px] rounded-lg border-2">
        <Image
          fill
          alt="cart image"
          className="object-cover rounded-lg"
          src={"https://i.ibb.co/37mp1RR/image.png"}
        ></Image>
      </section>

      {/* card info here */}
      <section className="px-3">
        <div>
          <h4 className="text-xl font-semibold">
            apple sider vinager pure fresh
          </h4>
          <div className="flex items-start mt-3 gap-2">
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
      </section>
    </div>
  );
};

export default CartCard;
