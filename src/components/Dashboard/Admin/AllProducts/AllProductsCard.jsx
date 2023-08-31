import React, { useState } from "react";
import { FaRegStar, FaRegWindowClose, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Image from "next/image";
import Link from "next/link";

const AllProductsCard = ({ product, handleDeleteProduct }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { category, sub_category, rating, price, image, title, _id } = product;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white relative border rounded-lg shadow-md w-fit h-full p-3"
    >
      {/* product image */}
      <div className="relative w-[300px] h-[200px]">
        <Image
          className="object-cover object-center border rounded-xl"
          src={image}
          alt="Product Images"
          fill
        />
      </div>
      {/* product info */}
      <div className="my-3 ml-1">
        {/* product name/title */}
        <h3 className="text-2xl my-2 font-semibold">{title}</h3>
        {/* product category */}
        <div className="flex gap-3 my-2 items-center">
          <span className="text-sm bg-green-500 rounded-full px-2 text-green-200">
            {category}
          </span>

          {product?.sub_category?.map((c) => (
            <span className="text-sm bg-green-400 rounded-full px-2 text-white">
              {c}
            </span>
          ))}
        </div>
        {/* product Price */}
        <h4 className="font-lg font-semibold text-green-400">$ {price}</h4>
        {/* product rating */}
        {product?.rating ? (
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
        ) : (
          ""
        )}

        {/* product Details Button */}
        <Link
          href={`/dashboard/allProducts/${_id}`}
        >
          <button className="bg-orange-400 px-4 py-1 rounded w-fit text-white hover:bg-orange-300 duration-300 mt-2">
            View Details
          </button>
        </Link>
        {/* product Delete Button */}
        <button
          onClick={() => handleDeleteProduct(_id)}
          className={`text-xl text-white bg-red-500 hover:bg-red-400 p-2 absolute top-3 right-3  rounded ${
            isHovered ? "block duration-500" : "hidden"
          }`}
        >
          <FaRegWindowClose />
        </button>
      </div>
    </div>
  );
};

export default AllProductsCard;
