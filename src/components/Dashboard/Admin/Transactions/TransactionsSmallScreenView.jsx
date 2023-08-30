import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { FaAngleUp } from "react-icons/fa6";

const TransactionsSmallScreenView = ({ orders }) => {
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
                    <span className="mr-1">{order.transactionId}</span>
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
                    <tbody className="w-full">
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          DATE & TIME
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300  text-green-500">
                          {new Date(order.date || new Date()).toLocaleString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "numeric",
                              year: "numeric",
                            }
                          )}{" "}
                          <br />
                          at{" "}
                          {new Date(order.date || new Date()).toLocaleString(
                            "en-US",
                            {
                              hour: "numeric",
                              minute: "numeric",
                            }
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          TRANSACTION ID
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300 ">
                          {order.transactionId}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          PRODUCT
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300  flex gap-2 items-center justify-left">
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
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          STATUS
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300  text-sm">
                          {order.status === "rejected" ? (
                            <span className="py-1.5 px-4 rounded-full bg-[#515C6B] font-medium text-white">
                              Rejected
                            </span>
                          ) : order.status === "canceled" ? (
                            <span className="py-1.5 px-4 rounded-full bg-[#FF5470] text-white font-medium">
                              Cancelled
                            </span>
                          ) : order.status === "approved" ? (
                            <span className="py-1.5 px-4 rounded-full bg-[#035ECF] text-white font-medium">
                              Approved
                            </span>
                          ) : (
                            <span>No data</span>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          FEE
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300 ">
                          ${order.payment}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          TAX
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300 ">
                          ${order.tax}
                        </td>
                      </tr>
                      <tr>
                        <td className=" font-semibold px-4 py-4 text-left border border-gray-300 ">
                          TOTAL
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300  font-semibold">
                          ${parseFloat(order.payment) + parseFloat(order.tax)}
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

export default TransactionsSmallScreenView;
