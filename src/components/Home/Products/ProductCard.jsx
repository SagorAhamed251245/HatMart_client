import Image from "next/image";
import React from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const {
    title,
    details,
    price,
    category,
    sub_category,
    image,
    images,
    rating,
    stock,
    discount_percent,
  } = product;
  return (
    <div className="border border-gray-200 p-4 rounded-xl bg-base-100 shadow-lg hover:shadow-2xl duration-300">
      <div className="relative bg-white h-36 w-full flex items-center justify-center ">
        <Image
          className="object-cover"
          src={image}
          width="100"
          height="100"
          alt="product image"
        />
        <p className="absolute bg-yellow-400 px-3 py-px rounded-full top-0 left-0 text-xs">
          {discount_percent}%
        </p>
      </div>
      <div className="space-y-1 mt-3">
        <p className="text-xs text-gray-600 bg-green-100 inline px-1 py-px rounded">
          {category}
        </p>
        <p className="text-sm text-[#34B701]">
          {stock == "In Stock" ? (
            "In Stock"
          ) : (
            <span className="text-red-600">{stock}</span>
          )}
        </p>
        <h5 className="text-lg text-gray-700 font-semibold">{title}</h5>
        <div className="flex items-center gap-2">
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar className="text-yellow-400" />}
            placeholderSymbol={<FaStar className="text-yellow-400" />}
            fullSymbol={<FaStar className="text-yellow-400" />}
            readonly
          />
          <span className="text-gray-500 text-sm font-medium">{rating}/5</span>
        </div>
        <p className="text-[#34B701] font-medium">${price}</p>
        <div className="flex items-center justify-between !mt-5">
          <button className="flex justify-center items-center gap-2 text-[#34B701] font-medium bg-green-100 px-4 py-1 rounded hover:bg-green-200">
            <AiOutlineShoppingCart size={20} /> Add{" "}
          </button>
          <button
            disabled={stock === "Out of stock"}
            className="flex justify-center items-center gap-2 bg-[#ff6347cc]  text-white px-4 py-1 rounded disabled:cursor-not-allowed disabled:opacity-60 hover:bg-[#FF7B13]"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
