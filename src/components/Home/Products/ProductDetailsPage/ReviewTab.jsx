"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import ReviewCard from "./ReviewCard";

const ReviewTab = ({ id }) => {
  const [reviews, setReviews] = useState([]);

  // fetch data
  useEffect(() => {
    fetch(`/reviews.json`)
      .then((res) => res.json())
      .then((data) => {
        const reviewData = data.filter((product) => product.productId === id);
        setReviews(reviewData);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5  duration-300 rounded">
      {reviews.length == 0 ? (
        <h4 className="text-center font-medium text-lg text-gray-600">
          This product has no reviews
        </h4>
      ) : (
        reviews.map((review) => <ReviewCard key={review._id} review={review} />)
      )}
    </div>
  );
};

export default ReviewTab;
