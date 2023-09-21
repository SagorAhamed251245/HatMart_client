import React from "react";
import Partone from "./Partone";
import Parttwo from "./Parttwo";

const OurStory = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mt-10 dark:text-white">
        Our Story
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center p-4 lg:p-16 gap-8 dark:text-white">
        <div className="lg:w-1/2">
          <Partone />
        </div>
        <div className="lg:w-1/2">
          <Parttwo />
        </div>
      </div>
    </>
  );
};

export default OurStory;
