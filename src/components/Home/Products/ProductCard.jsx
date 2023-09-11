import Image from "next/image";
import React from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";
import BuyNow from "./BuyNow";

const ProductCard = ({ product, handleAddToCart }) => {
  const {
    _id,
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
    stock_quantity,
  } = product;

  return (
    <div className="relative border border-gray-200 dark:border-gray-500  p-2 md:p-4 rounded-xl bg-base-100 shadow-lg hover:shadow-2xl duration-300 h-[25rem]">
      <Link
        href={{
          pathname: `/productDetails`,
          query: {
            productId: _id,
          },
        }}
      >
        {/* details route */}

        <div className="  h-36 w-full overflow-hidden  relative">
          <Image
            src={image} // Replace with the actual image URL
            height={300}
            width={500}
            className="w-full h-full object-contain"
            priority
            alt="product image"
          />

          {discount_percent && discount_percent > 0 && (
            <p className="absolute bg-yellow-400 dark:text-white px-3 py-px rounded-full top-0 left-0 text-xs">
              {discount_percent}%
            </p>
          )}
        </div>

        <div className="space-y-1 mt-3">
          <p className="text-xs dark:text-white dark:bg-green-500 text-gray-600 bg-green-100 inline px-1 py-px rounded">
            {category}
          </p>
          <p className="text-sm text-[#34B701]">
            {stock_quantity > 0 ? (
              "In Stock"
            ) : (
              <span className="text-red-600">Out Of Stock</span>
            )}
          </p>
          <h5 className="md:text-lg capitalize  text-base text-gray-700 dark:text-white font-semibold">
            {title}
          </h5>
          {rating && rating > 0 && (
            <div className="flex items-center gap-2 md:text-base text-sm">
              <span className="mt-1">
                <Rating
                  placeholderRating={rating}
                  emptySymbol={<FaRegStar className="text-yellow-400" />}
                  placeholderSymbol={<FaStar className="text-yellow-400" />}
                  fullSymbol={<FaStar className="text-yellow-400" />}
                  readonly
                />
              </span>
              <span className="text-gray-500 dark:text-gray-50 text-sm font-medium">
                {rating}/5
              </span>
            </div>
          )}
          <p className=" md:text-base text-sm font-medium">
            {discount_percent ? (
              <>
                <span className=" line-through">${price}</span>
                <span className="text-[#34B701] ml-4">
                  $
                  {(
                    parseFloat(price) -
                    parseFloat(
                      parseFloat(price) * (parseFloat(discount_percent) / 100)
                    )
                  ).toFixed(2)}
                </span>{" "}
              </>
            ) : (
              <span className="text-[#34B701]">${price}</span>
            )}
          </p>
        </div>
      </Link>
      <div className="absolute w-full bottom-4 left-0 px-2 md:px-4 mt-2">
        <div className="flex items-center justify-between !mt-5">
          <AddToCartBtn handleAddToCart={handleAddToCart} id={_id} />

          <BuyNow stock_quantity={stock_quantity} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
