import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { FaAngleUp } from "react-icons/fa6";

const TransactionsSmallScreenView = ({ transactions }) => {
  return (
    <div className="lg:hidden overflow-x-auto">
      {transactions.map((transition) => (
        <div
          key={transition._id}
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
                        src={transition?.productImage}
                        alt="product image"
                        width={40}
                        height={40}
                      />
                    </div>
                    <p>{transition?.productName}</p>
                  </div>
                  <p>
                    <span className="mr-1">{transition?.transactionId}</span>
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
                          {new Date(
                            transition?.createdAt || new Date()
                          ).toLocaleString("en-US", {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",
                          })}{" "}
                          <br />
                          at{" "}
                          {new Date(
                            transition?.createdAt || new Date()
                          ).toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                          })}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          TRANSACTION ID
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300 ">
                          {transition.transactionId}
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
                                src={transition?.productImage}
                                alt="product image"
                                width={40}
                                height={40}
                              />
                            </div>
                            <span>{transition?.productName}</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          STATUS
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          FEE
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300 ">
                          ${transition?.price}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          TAX
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300 ">
                          {transition?.quantity || 1}
                        </td>
                      </tr>
                      <tr>
                        <td className=" font-semibold px-4 py-4 text-left border border-gray-300 ">
                          TOTAL
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300  font-semibold">
                          $
                          {parseFloat(transition?.price) *
                            parseFloat(transition?.quantity || 1)}
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
