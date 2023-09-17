import Image from "next/image";
import React from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";
import BuyNow from "./BuyNow";
import WishListBtn from "./WishListBtn";

const ProductCard = ({ product }) => {
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
    <div className="relative border group border-gray-200 dark:border-gray-500 flex items-center justify-center p-2 md:p-4 rounded-xl bg-base-100 shadow-lg hover:shadow-2xl duration-300 h-[25rem]">
      <WishListBtn product_id={_id} product={product} />
      <div className="absolute h-36 top-3 px-3 z-10  lg:w-full">
        <Link
          href={{
            pathname: `/productDetails`,
            query: {
              productId: _id,
            },
          }}
        >
          {/* details route */}

          <div className="h-36  lg:w-full  overflow-hidden  relative">
            <div className="lg:w-full h-full overflow-hidden rounded-lg ">
              <Image
                src={image} // Replace with the actual image URL
                height={300}
                width={500}
                className="w-full h-full group-hover:scale-125 dark:bg-white  object-contain transition ease-in-out duration-500 "
                priority
                alt="product image"
              />
            </div>
            {/* <p className="h-36 absolute hidden group-hover:block rounded-xl  ease-in-out duration-500 delay-500 top-0 z-10 w-full bg-[#04040457]"></p> */}

            {discount_percent && discount_percent > 0 && (
              <p className="absolute z-20 bg-yellow-400 dark:text-white px-3 py-px rounded-full top-0 left-0 text-xs">
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
            <h5 className="md:text-xl lg:text-lg  sm:text-sm capitalize  text-base text-gray-700 dark:text-white font-semibold">
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
      </div>
      <div className="absolute w-full bottom-2 left-0 px-2 md:px-4 mt-2">
        <div className="flex items-center justify-between !mt-5">
          <AddToCartBtn _id={_id} />

          <BuyNow
            stock_quantity={stock_quantity}
            _id={_id}
            totalPrice={
              discount_percent
                ? (
                    parseFloat(price) -
                    parseFloat(
                      parseFloat(price) * (parseFloat(discount_percent) / 100)
                    )
                  ).toFixed(2)
                : price
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
