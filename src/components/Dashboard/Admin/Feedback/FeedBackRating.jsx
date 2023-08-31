"use client";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const FeedBackRating = ({ ratings }) => {
  return (
    <Rating
      fractions={true}
      placeholderRating={ratings}
      emptySymbol={<FaRegStar className="text-yellow-400" />}
      placeholderSymbol={<FaStar className="text-yellow-400" />}
      fullSymbol={<FaStar className="text-yellow-400" />}
      readonly
    />
  );
};

export default FeedBackRating;
