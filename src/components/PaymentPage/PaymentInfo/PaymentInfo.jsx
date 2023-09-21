"use client";

import { Fragment, useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import getSingleProduct from "@/utils/getSingleProduct";

const PaymentInfo = ({ searchParams }) => {
  const productsId = JSON.parse(searchParams.productId);
  const [allProducts, setAllProducts] = useState([]);
  console.log(searchParams);

  useEffect(() => {
    (async () => {
      const products = [];

      for (const productInfo of productsId) {
        const product = await getSingleProduct(productInfo._id);
        products.push({ ...product, quantity: productInfo?.quantity });
      }

      setAllProducts(products);
    })();
  }, []);

  return (
    <Fragment>
      <section className="shadow-xl border rounded py-5 px-2 dark:text-white">
        <div className="px-5">
          <div className="border  p-2 rounded mb-4">
            {allProducts.map((product, index) => (
              <>
                <div className=" gap-5 items-center justify-between my-2 ">
                  <p>#{index + 1}</p>
                  <div className="h-12 w-12 flex rounded">
                    <Image
                      src={product?.image}
                      alt={product?.title}
                      height={150}
                      width={150}
                      className="object-cover w-full"
                    ></Image>
                  </div>
                  <div>{product?.title.slice(0, 30)}...</div>
                  <div>x{product?.quantity}</div>
                </div>
              </>
            ))}
          </div>

          {/*  */}
          <p>Discount and Payment</p>
          <div className="flex justify-between mt-3 mb-3">
            <div>Voucher</div>
            <div>No Applicable Voucher</div>
          </div>

          <hr />
          <p className="font-semibold mt-3">Order Summary</p>
          <div className="flex justify-between mt-3">
            <div>Total Item:</div>
            <div>{allProducts.length}</div>
          </div>
          <div className="flex justify-between">
            <div>Delivery Fee:</div>
            <div>${2}</div>
          </div>
          <div className="flex justify-between">
            <div>Total Payment:</div>
            <div>${searchParams.totalPrice}</div>
          </div>
          {/*  */}
          <div className="mt-10 ">
            <Link
              className="bg-[#34B701] w-[100%] text-white md:text-base text-sm px-[10px] md:px-4 font-medium py-1 rounded disabled:opacity-60 hover:bg-[#FF7B13]"
              href={{
                pathname: "/payment/payallmethod",
                query: {
                  allProducts: JSON.stringify(allProducts),
                  totalAmount: searchParams.totalPrice,
                },
              }}
            >
              Place Order
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PaymentInfo;
