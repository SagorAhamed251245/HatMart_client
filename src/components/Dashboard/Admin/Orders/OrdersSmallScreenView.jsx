import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaAngleUp, FaEllipsisVertical } from "react-icons/fa6";
import Rating from "react-rating";

const OrdersSmallScreenView = ({ orders }) => {
  return (
    <div className="lg:hidden overflow-x-auto">
      {orders.map((order) => (
        <div
          key={order._id}
          className="mx-auto w-full mb-4 py-3 shadow-lg hover:shadow-2xl duration-300 "
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
        >
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-lg  px-4  text-left  font-medium   focus:outline-none   focus:border-none ">
                  <div className=" px-1  text-left   flex gap-2 items-center justify-center">
                    <div className="h-6 w-6 overflow-hidden object-contain rounded">
                      <Image
                        style={{ objectFit: "contain" }}
                        src={order.productImage}
                        alt="product image"
                        width={40}
                        height={40}
                      />
                    </div>
                    <p>{order.productName}</p>
                  </div>
                  <p>
                    <span className="mr-2">{order._id}</span>
                    <FaAngleUp
                      className={`${
                        open
                          ? "rotate-180 transform duration-500"
                          : "rotate-360 transform duration-500"
                      } h-5 w-5 text-green-500 font-bold inline`}
                    />
                  </p>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 !text-sm w-full">
                  <table className="w-full">
                    <tbody className="w-full">
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          # ORDER
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300  text-green-500">
                          {order._id}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          CATEGORY
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300 ">
                          {order.productCategory}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          PRODUCT
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300  ">
                          <div className="flex gap-2 items-center justify-left">
                            <div className="h-10 w-10 overflow-hidden object-contain rounded">
                              <Image
                                style={{ objectFit: "contain" }}
                                src={order.productImage}
                                alt="product image"
                                width={40}
                                height={40}
                              />
                            </div>
                            <span>{order.productName}</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          ORDER STATUS
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300  text-sm">
                          {order.orderStatus === "pending" ? (
                            <span className="py-1.5 px-4 rounded-full bg-[#00BA9D] font-medium text-white">
                              Pending
                            </span>
                          ) : order.orderStatus === "canceled" ? (
                            <span className="py-1.5 px-4 rounded-full bg-[#FF5470] text-white font-medium">
                              Cancelled
                            </span>
                          ) : order.orderStatus === "completed" ? (
                            <span className="py-1.5 px-4 rounded-full bg-[#035ECF] text-white font-medium">
                              Completed
                            </span>
                          ) : (
                            <span>No data</span>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          PAYMENT
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300 ">
                          ${order.price}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          Rating
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300 ">
                          <Rating
                            fractions={true}
                            placeholderRating={order.rate}
                            emptySymbol={
                              <FaRegStar className="text-yellow-400" />
                            }
                            placeholderSymbol={
                              <FaStar className="text-yellow-400" />
                            }
                            fullSymbol={<FaStar className="text-yellow-400" />}
                            readonly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className=" font-semibold px-4 py-4 text-left border border-gray-300 ">
                          Actions
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300  font-semibold">
                          <FaEllipsisVertical
                            size={30}
                            className="text-green-500 cursor-pointer"
                          />
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

export default OrdersSmallScreenView;
