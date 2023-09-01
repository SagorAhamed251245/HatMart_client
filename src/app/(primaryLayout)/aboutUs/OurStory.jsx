import React from "react";
import Partone from "./Partone";
import Parttwo from "./Parttwo";

const OurStory = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mt-10">Our Story</h2>
      <div className="flex justify-center items-center p-16 gap-3">
        <div className="sm:w-[100%] md:w-[50%]">
          <Partone></Partone>
        </div>

        <div className="sm:w-[100%] md:w-[50%]">
          <Parttwo></Parttwo>
        </div>
      </div>
    </>
  );
};

export default OurStory;
