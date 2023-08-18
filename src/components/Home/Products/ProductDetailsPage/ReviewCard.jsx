import Image from 'next/image';
import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ReviewCard = ({review}) => {
    return (
        <div
            
            className="border-[.5px] shadow-md duration-300  border-gray-200 rounded p-5"
          >
            <div className="flex gap-5">
              <div className="avatar">
                <div className="w-16 h-16 rounded-full">
                  <Image
                    className="rounded-full h-full"
                    src={review.customer_Image}
                    width={80}
                    height={80}
                    alt="product image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-gray-700 text-xl font-medium">
                  {review.customer_Name} -{" "}
                  <span className="text-xs text-green-500">
                    {new Date(review.createdAt).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </h3>
                <Rating
                  placeholderRating={review?.rating}
                  emptySymbol={
                    <FaRegStar className="text-yellow-400" size={16} />
                  }
                  placeholderSymbol={
                    <FaStar className="text-yellow-400" size={16} />
                  }
                  fullSymbol={<FaStar className="text-yellow-400" size={16} />}
                  readonly
                />
                <p className="text-gray-500 text-sm font-medium">
                  {review.feedback}
                </p>
              </div>
            </div>
          </div>
    );
};

export default ReviewCard;