import React from "react";
import AllReviewTable from "./AllReviewTable";

const Review = () => {
  return (
    <>
      <section className="px-4 mx-auto sm:px-8 mt-5">
        <h3 className="text-3xl font-bold mb-5">Review</h3>

        <AllReviewTable></AllReviewTable>
      </section>
    </>
  );
};

export default Review;
