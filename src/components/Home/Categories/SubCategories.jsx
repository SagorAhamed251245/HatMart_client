import React from "react";
import Link from "next/link";

const SubCategories = ({ sub_category }) => {
  return (
    <div className=" border p-5 m-5 flex flex-wrap  bg-white dark:bg-Dark  h-auto ">
      {sub_category.map((item) => (
        <Link
          href={{
            pathname: `/categoryProducts`,
            query: {
              sub_category: item,
            },
          }}
          key={item}
          className="border-white m-4 font-medium  hover:text-yellow-600 hover:underline"
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default SubCategories;
