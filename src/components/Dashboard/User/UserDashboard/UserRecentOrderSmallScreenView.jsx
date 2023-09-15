import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { FaAngleUp } from "react-icons/fa6";

const UserRecentOrderSmallScreenView = ({ orders }) => {
  return (
    <div className="lg:hidden overflow-x-auto">
      {orders.length === 0 && (
        <p className="text-center">You did not make any order yet.</p>
      )}
      {orders.length > 0 &&
        orders.slice(0, 3).map((order) => (
          <div
            key={order?._id}
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
                          src={order?.productImage}
                          alt="product image"
                          width={40}
                          height={40}
                        />
                      </div>
                      <p>{order?.productName.slice(0, 30)}</p>
                    </div>
                    <p>
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
                            ORDER #
                          </td>
                          <td className=" px-4 py-4 text-left border border-gray-300  text-green-500">
                            {order?._id}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                            ITEMS
                          </td>
                          <td className=" px-4 py-4 text-left border border-gray-300  ">
                            <div className="flex gap-2 items-center justify-left">
                              <div className="h-10 w-10 overflow-hidden object-contain rounded">
                                <Image
                                  style={{ objectFit: "contain" }}
                                  src={order?.productImage}
                                  alt="product image"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <span>{order?.productName}</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                            PLACED ON
                          </td>
                          <td className=" px-4 py-4 text-left border border-gray-300 ">
                            {new Date(order?.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                            PRICE
                          </td>
                          <td className=" px-4 py-4 text-left border border-gray-300 ">
                            ${order?.price}
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

export default UserRecentOrderSmallScreenView;
