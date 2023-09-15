import reviewData from "@/data/reviewData";
import Image from "next/image";
import React from "react";
import ReviewRating from "./ReviewRating";
import AllReviewTableSmallScreen from "./AllReviewTableSmallScreen";

const AllReviewTable = () => {
  if (!reviewData || reviewData.length === 0) {
    return <div>No reviews available</div>; // Display a message if there are no reviews
  }
  return (
    <div
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      className="overflow-x-auto mt-10 border rounded-xl p-4 shadow mb-5"
    >
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 text-green-500">
              <th className="px-4 py-2 text-center">Number</th>
              <th className="px-4 py-2 text-center">User</th>
              <th className="px-4 py-2 text-center">Product</th>
              <th className="px-4 py-2 text-center">Rating</th>
              <th className="px-4 py-2 text-center">Message</th>
            </tr>
          </thead>
          <tbody>
            {reviewData.map((review) => (
              <tr key={review._id} className="border-b border-gray-300">
                <td className="px-4 py-2 text-center text-green-500">
                  {review.reviewNumber}
                </td>

                {/* User image & name */}
                <td className="px-4 py-2">
                  <div className="flex flex-col md:flex-row gap-2 items-center">
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

                {/* Product image & name */}
                <td className="px-4 py-2">
                  <div className="flex flex-col md:flex-row gap-2 items-center">
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

                <td className="px-4 py-2 text-center">
                  <div className="flex items-center justify-center gap-3 md:text-base text-sm">
                    <ReviewRating ratings={review.rate} />
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="w-full md:w-[250px] rounded-xl h-24 border">
                    <div className="p-2 pr-4 font-semibold">
                      {review.message.length > 100 ? (
                        <>
                          {review.message.slice(0, 100)} <span>...</span>{" "}
                        </>
                      ) : (
                        review.message
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AllReviewTableSmallScreen
        reviewData={reviewData}
      ></AllReviewTableSmallScreen>
    </div>
  );
};

export default AllReviewTable;
