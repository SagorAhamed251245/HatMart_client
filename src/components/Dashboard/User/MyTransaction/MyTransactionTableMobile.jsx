import { Disclosure } from "@headlessui/react";
import { FaAngleUp } from "react-icons/fa6";

const MyTransactionTableMobile = ({ transaction }) => {
  return (
    <div className="lg:hidden overflow-x-auto">
      {transaction.map((data) => (
        <div
          key={data?._id}
          className="mx-auto w-full mb-4 py-3 shadow-lg hover:shadow-2xl duration-300 "
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
        >
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-lg  px-4  text-left  font-medium   focus:outline-none   focus:border-none ">
                  <div className=" px-1  text-left   flex gap-2 items-center justify-center">
                    <p className="text-xs">{data?._id}</p>
                  </div>
                  <p>
                    <span className="mr-2">
                      {new Date(data?.createdAt).toLocaleDateString()}
                    </span>
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
                          # Transaction
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300  text-green-500">
                          {data?._id}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          date
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300 ">
                          {new Date(data?.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          Time
                        </td>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          {new Date(data?.createdAt).toLocaleTimeString()}
                        </td>
                      </tr>

                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          Amount
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300 ">
                          ${data?.totalPrice}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          Payment Method
                        </td>
                        <td className="font-semibold px-4 py-4 text-left border border-gray-300 ">
                          {data?.paymentMethod}
                        </td>
                      </tr>
                      <tr>
                        <td className=" font-semibold px-4 py-4 text-left border border-gray-300 ">
                          More
                        </td>
                        <td className=" px-4 py-4 text-left border border-gray-300  font-semibold">
                          More Details
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

export default MyTransactionTableMobile;
