import React from "react";
import promisesData from "@/data/promissdata";
import PromiseItem from "./PromiseItem";

const OurPromise = () => {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-4">Our Promis</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {promisesData.slice(0, 3).map((promise, index) => (
          <div key={index} className="w-64 p-4">
            <PromiseItem
              icon={promise.icon}
              text={promise.text}
              sentence={promise.sentence}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {promisesData.slice(3, 5).map((promise, index) => (
          <div key={index} className="w-64 p-4">
            <PromiseItem
              icon={promise.icon}
              text={promise.text}
              sentence={promise.sentence}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurPromise;
