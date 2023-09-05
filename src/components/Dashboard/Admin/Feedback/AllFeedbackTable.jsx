import feedbackData from "@/data/feedbackData";
import Image from "next/image";
import React from "react";

import { FaEllipsisVertical } from "react-icons/fa6";

import FeedBackRating from "./FeedBackRating";
import FeedbackSmallView from "./FeedbackSmallView";

const AllFeedbackTable = () => {
  return (
    <div
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      className="overflow-x-auto mt-10 border rounded-xl p-4 shadow mb-5"
    >
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full border-collapse ">
          <thead>
            <tr className="border-b border-gray-300 text-green-500 w-full">
              <th className=" px-4 py-4 text-center">Feedback</th>
              <th className=" px-4 py-4 text-center">User</th>
              <th className=" px-4 py-4 text-center">Rating</th>
              <th className=" px-4 py-4 text-center">Message</th>
              <th className=" px-4 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((feedback) => (
              <tr
                key={feedback._id}
                className="border-b border-gray-300 w-full"
              >
                <td className=" px-4 py-4 text-center text-green-500">
                  {feedback.feedbackNumber}
                </td>
                <td className=" px-4 py-4">
                  <div className=" h-auto  flex gap-2 items-center">
                    <div className="h-24 w-24 overflow-hidden  rounded border ">
                      <Image
                        className="w-full object-cover "
                        src={feedback.userImage}
                        alt="product image"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="text-start font-semibold">
                      <span>{feedback.userName}</span>
                      <br />
                      <span>{feedback.userEmail}</span>
                    </div>
                  </div>
                </td>

                <td className=" px-4 py-4 text-center">
                  <div className="flex items-center justify-center gap-3 md:text-base text-sm">
                    <FeedBackRating ratings={feedback.rate} />
                  </div>
                </td>
                <td className="">
                  <div className="w-[400px] rounded-xl h-24 border  ">
                    <div className="">
                      <p className="p-2 pr-4 font-semibold">
                        {feedback.message.length > 100 ? (
                          <>
                            {feedback.message.slice(0, 100)} <span>...</span>{" "}
                          </>
                        ) : (
                          feedback.message
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
      <FeedbackSmallView feedbackData={feedbackData} />
    </div>
  );
};

export default AllFeedbackTable;
