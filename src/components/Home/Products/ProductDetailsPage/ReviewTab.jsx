"use client";

import ReviewCard from "./ReviewCard";

const ReviewTab = ({ reviewsData }) => {
  return (
    <div className="grid grid-cols-1 gap-5  duration-300 rounded">
      {reviewsData.length === 0 ? (
        <h4 className="text-center font-medium text-lg text-gray-600">
          This product has no reviews
        </h4>
      ) : (
        reviewsData &&
        reviewsData.length > 0 &&
        reviewsData.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))
      )}
    </div>
  );
};

export default ReviewTab;
