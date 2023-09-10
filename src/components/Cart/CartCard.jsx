"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import CartCounter from "./CartCounter";
import CartCardDeleteButton from "./CartCardDeleteButton";

const CartCard = ({
  cartItem,
  decreaseAmount,
  increaseAmount,
  deleteCartItem,
}) => {
  const [total, setTotal] = useState(0);
  const totalPrice = useRef();

  // cartItem Destructure
  const { title, price, rating, _id, image } = cartItem;

  return (
    <div className="bg-white mb-3 flex p-3 md:w-[650px] w-full rounded-lg">
      {/* card image here */}
      <div className="relative h-full w-[120px] object-cover rounded-lg border border-slate-400">
        <Image
          fill
          alt="cart image"
          className="object-cover object-center h-full w-full rounded-lg"
          src={image}
        ></Image>
      </div>

      {/* card info here */}
      <section className="px-3 flex justify-between w-full">
        {/* item info */}
        <div>
          <h4 className="text-xl font-semibold">
            {title?.length > 20 ? title?.slice(0, 20) + "..." : title}
          </h4>
          <div className="mt-2">
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar className="text-yellow-400" />}
              placeholderSymbol={<FaStar className="text-yellow-400" />}
              fullSymbol={<FaStar className="text-yellow-400" />}
              readonly
            />
            <span className="text-gray-500 text-sm font-medium">
              ({rating})
            </span>
          </div>
          {/* price as percentage */}
          <div>
            <p className=" md:text-base text-sm my-2 font-medium">
              {cartItem?.discount_percent ? (
                <>
                  <span className="text-[#34B701]">
                    $
                    {(
                      parseFloat(price) -
                      parseFloat(
                        parseFloat(price) *
                          (parseFloat(cartItem?.discount_percent) / 100)
                      )
                    ).toFixed(2)}
                  </span>{" "}
                  <span className=" line-through  ml-4 text-sm text-gray-400">
                    ${price}
                  </span>
                </>
              ) : (
                <span className="text-[#34B701]">${price}</span>
              )}
            </p>
          </div>
        </div>

        {/* counter + total */}

        <div className="gap-6 md:ml-10 flex">
          <div className="flex flex-col justify-between items-center">
            {/* counter */}

            <CartCounter
              _id={_id}
              price={price}
              setTotal={setTotal}
              cartItem={cartItem}
              decreaseAmount={decreaseAmount}
              increaseAmount={increaseAmount}
            />

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

          <CartCardDeleteButton
            _id={_id}
            total={total}
            deleteCartItem={deleteCartItem}
          />
        </div>
      </section>
    </div>
  );
};

export default CartCard;
