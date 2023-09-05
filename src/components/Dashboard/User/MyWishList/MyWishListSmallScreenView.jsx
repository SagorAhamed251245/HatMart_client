import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { FaAngleUp } from "react-icons/fa6";

const MyWishListSmallScreenView = ({ orders }) => {
  return (
    <div className="lg:hidden overflow-x-auto">
      {orders.map((order) => (
        <div
          key={order.id}
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
                    <span className="mr-2">${order.payment}</span>
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
                          CATEGORY
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300 ">
                          {order.category}
                        </td>
                      </tr>

                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          PRICE
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300 ">
                          ${order.payment}
                        </td>
                      </tr>

                      <tr>
                        <td className=" font-semibold px-4 py-4 text-left border border-gray-300 ">
                          Actions
                        </td>
                        <td className=" px-4 py-4  border border-gray-300">
                          <div className="flex justify-center items-center gap-4 w-fit ">
                            <p
                              className="tooltip tooltip-top "
                              data-tip="remove"
                            >
                              <AiOutlineDelete
                                size={24}
                                className="text-red-400 mx-auto cursor-pointer"
                              />
                            </p>
                            <button
                              onClick={() => handleAddToCart(id)}
                              className="flex justify-center items-center gap-2 text-[#34B701] font-medium bg-green-100 text-sm md:text-base px-[10px] md:px-4 py-1 rounded hover:bg-green-200"
                            >
                              <AiOutlineShoppingCart size={20} /> Add
                            </button>
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

export default MyWishListSmallScreenView;
