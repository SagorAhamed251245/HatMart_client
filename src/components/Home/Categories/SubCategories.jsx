import React from "react";
import Link from "next/link";

const SubCategories = ({ sub_category }) => {
  return (
    <div className=" p-2 w-96  grid gap-3 bg-white grid-cols-3  h-auto ">
      {sub_category.map((item) => (
        <Link
          href={{
            pathname: `/categoryProducts`,
            query: {
              sub_category: item,
            },
          }}
          key={item}
          className="border-white hover:border-black border "
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default SubCategories;
