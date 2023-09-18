import React, { useState } from "react";
import { FaEdit, FaRegStar, FaRegWindowClose, FaStar } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import Rating from "react-rating";
import Image from "next/image";
import Link from "next/link";

const AllProductsCard = ({ product, handleDeleteProduct }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { category, sub_category, rating, price, image, title, _id } = product;

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white dark:bg-transparent  relative border border-white dark:border-gray-700 rounded-lg shadow-md w-[300px] h-full p-3 flex flex-col"
    >
      {/* product image */}
      <div className="relative w-full h-[200px]">
        <Image
          className="object-contain object-center border border-white bg-white rounded-xl w-full h-full"
          src={image}
          alt="Product Images"
          fill
        />
      </div>

      {/* product info */}
      <div className="flex-grow py-2">
        {/* product name/title */}
        <h3 className="text-xl text-gray-800 dark:text-white my-2 ">{title}</h3>
        {/* product category */}
        <div className="flex gap-3 my-2 flex-wrap items-center">
          <span className="text-sm bg-green-500 rounded-full px-2 text-green-200">
            {category}
          </span>

          {product?.sub_category?.map((c, index) => (
            <span
              key={index}
              className="text-sm bg-green-400 rounded-full px-2 text-white"
            >
              {c}
            </span>
          ))}
        </div>
        {/* product Price */}
        <p className=" md:text-base text-sm my-2 font-medium">
          {product?.discount_percent ? (
            <>
              <span className="text-[#34B701]">
                $
                {(
                  parseFloat(price) -
                  parseFloat(
                    parseFloat(price) *
                      (parseFloat(product?.discount_percent) / 100)
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
        {/* product rating */}
        {product?.rating ? (
          <div className="my-2">
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar className="text-yellow-400" />}
              placeholderSymbol={<FaStar className="text-yellow-400" />}
              fullSymbol={<FaStar className="text-yellow-400" />}
              readonly
            />
            <span className="text-gray-500 dark:text-gray-200 text-sm font-medium">
              ({rating})
            </span>
          </div>
        ) : (
          ""
        )}

        {/* product Details Button */}
        {/* product Delete Button */}
        <button
          onClick={() => handleDeleteProduct(_id)}
          className={`text-xl text-white bg-red-500 hover:bg-red-400 p-2 absolute top-0 right-0  rounded ${
            isHovered ? "block duration-500" : "hidden"
          }`}
        >
          <FaRegWindowClose />
        </button>
      </div>

      <div className="flex justify-between items-center">
        <button className="bg-green-500 px-4 py-2 rounded w-fit  text-white hover:bg-green-600 duration-300">
          <Link
            className="flex items-center gap-2"
            href={`/dashboard/allProducts/${_id}`}
          >
            {" "}
            <CiViewList /> View
          </Link>
        </button>
        <button>
          <Link
            className="bg-orange-400 px-4 py-2 rounded w-fit text-white flex items-center gap-2 hover:bg-orange-500 duration-300"
            href={`/dashboard/allProducts/editProduct/${_id}`}
          >
            <FaEdit />
            Edit
          </Link>
        </button>
      </div>
    </section>
  );
};

export default AllProductsCard;
