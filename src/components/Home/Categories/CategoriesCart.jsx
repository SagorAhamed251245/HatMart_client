"use client";
import React, { useState } from "react";
import Image from "next/image";
import SubCategories from "./SubCategories";

const CategoriesCart = ({ item }) => {
  const { id, category, icon, sub_category } = item;
  const [showSubCategory, setShowSubCategory] = useState(false);

  const handleMouseEnter = () => {
    setShowSubCategory(true);
  };

  const handleMouseLeave = () => {
    setShowSubCategory(false);
  };

  return (
    <div className=" h-24 w-36">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=" flex flex-col  h-24 w-36 p-2 lg:p-0 items-center justify-center rounded-xl"
      >
        <div>
          <Image src={icon} width={30} height={30} alt={category} />
        </div>
        <div>
          <h4 className="font-bold text-xs text-center">{category}</h4>
        </div>
        {showSubCategory && (
          <div className="absolute h-auto  top-50  z-30   bg-green-500 overflow-hidden ">
            <SubCategories sub_category={sub_category}></SubCategories>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesCart;
