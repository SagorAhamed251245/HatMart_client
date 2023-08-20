import React from "react";
import CategoriesCart from "./CategoriesCart";

const ChildCategories = ({ categories }) => {
  return (
    <div className="flex flex-row items-center justify-between overflow-x-auto  cursor-pointer ">
      {categories?.map((item) => (
        <CategoriesCart key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ChildCategories;
