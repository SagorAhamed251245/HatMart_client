import Image from "next/image";
import React from "react";

import { FaEllipsisVertical } from "react-icons/fa6";

import FeedBackRating from "./FeedBackRating";
import FeedbackSmallView from "./FeedbackSmallView";

const AllFeedbackTable = ({ feedbacks }) => {
  return (
    <div
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      className="overflow-x-auto mt-10 border rounded-xl p-4 shadow mb-5"
    >
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full border-collapse ">
          <thead>
            <tr className="border-b border-gray-300 text-green-500 w-full">
              <th className=" px-4 py-4 text-center">#ID NO</th>
              <th className=" px-4 py-4 text-center">User</th>
              <th className=" px-4 py-4 text-center">Rating</th>
              <th className=" px-4 py-4 text-center">Message</th>
              <th className=" px-4 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr
                key={feedback._id}
                className="border-b border-gray-300 w-full"
              >
                <td className=" px-4 py-4 text-center text-green-500 text-sm">
                  <span title={feedback._id}>
                    {feedback._id.slice(0, 8)}...
                  </span>
                </td>
                <td className=" px-4 py-4">
                  <div className="  flex gap-2 items-center">
                    <div className="w-16 overflow-hidden  rounded ">
                      <Image
                        className="w-full "
                        src={feedback.customer_image}
                        alt="product image"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="text-start text-sm">
                      <span>{feedback.customer_name}</span>
                      <br />
                      <span>{feedback.customer_email}</span>
                    </div>
                  </div>
                </td>

                <td className=" px-4 py-4 text-center">
                  <div className="flex items-center justify-center gap-3 md:text-base text-sm">
                    <FeedBackRating ratings={feedback.rating} />
                  </div>
                </td>
                <td className="">
                  <div className="w-[400px] rounded-xl h-24 border  ">
                    <div className="">
                      <p className="p-2 pr-4 ">
                        {feedback.feedback.length > 100 ? (
                          <>
                            {feedback.feedback.slice(0, 100)} <span>...</span>{" "}
                          </>
                        ) : (
                          feedback.feedback
                        )}
                      </p>
                    </div>
                  </div>
                </td>
                <td className=" px-4 py-4 text-center">
                  <FaEllipsisVertical
                    size={30}
                    className="text-green-500 mx-auto cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FeedbackSmallView feedbackData={feedbacks} />
    </div>
  );
};

export default AllFeedbackTable;
