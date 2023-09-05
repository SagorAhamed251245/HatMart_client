// AllReviewTableSmallScreen.js
"use client";

import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { FaAngleUp } from "react-icons/fa6";
import ReviewRating from "./ReviewRating";

const AllReviewTableSmallScreen = ({ reviewData }) => {
  return (
    <div className="lg:hidden overflow-x-auto">
      {reviewData.map((review) => (
        <div
          key={review._id}
          className="mx-auto w-full mb-4 py-3 shadow-lg hover:shadow-2xl duration-300"
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
        >
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-lg px-4 text-left font-medium focus:outline-none focus:border-none">
                  <div className="px-1 text-left flex gap-2 items-center justify-center">
                    <div className="h-6 w-6 overflow-hidden object-contain rounded">
                      <Image
                        style={{ objectFit: "contain" }}
                        src={review.userImage}
                        alt="user image"
                        width={40}
                        height={40}
                      />
                    </div>
                    <p>{review.userName}</p>
                  </div>
                  <p>
                    <span className="mr-1">{review.reviewNumber}</span>
                    <FaAngleUp
                      className={`${
                        open
                          ? "rotate-180 transform duration-500"
                          : "rotate-360 transform duration-500"
                      } h-5 w-5 text-green-500 font-bold inline`}
                    />
                  </p>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm w-full">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="font-semibold px-4 py-2 text-left border border-gray-300">
                          Number
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <div className="flex gap-2 items-center">
                            <div className="h-16 w-16 md:h-15 md:w-15 overflow-hidden rounded-full border">
                              <Image
                                className="w-full h-full object-cover"
                                src={review.userImage}
                                alt="user image"
                                width={80}
                                height={80}
                              />
                            </div>
                            <div className="text-center md:text-start font-semibold">
                              <span>{review.userName}</span>
                              <br />
                              <span>{review.userEmail}</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-2 text-left border border-gray-300">
                          Product
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <div className="flex gap-2 items-center">
                            <div className="h-16 w-16 md:h-20 md:w-20 overflow-hidden border">
                              <Image
                                className="w-full h-full object-cover"
                                src={review.productImage}
                                alt="product image"
                                width={80}
                                height={80}
                              />
                            </div>
                            <div className="text-center md:text-start font-semibold">
                              <span>{review.productName}</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-2 text-left border border-gray-300">
                          Rating
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <div className="flex items-center justify-center gap-3 md:text-base text-sm">
                            <ReviewRating ratings={review.rate} />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-2 text-left border border-gray-300">
                          Message
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <div className="w-full md:w-[300px] rounded-xl h-24 ">
                            <div className="p-2 pr-4 font-semibold">
                              {review.message.length > 100 ? (
                                <>
                                  {review.message.slice(0, 100)}{" "}
                                  <span>...</span>{" "}
                                </>
                              ) : (
                                review.message
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};

export default AllReviewTableSmallScreen;
