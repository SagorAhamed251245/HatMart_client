"use client";
import React, { useState } from "react";
import Image from "next/image";
import SubCategories from "./SubCategories";

const CategoriesCart = ({ item, handleMouseEnter, handleMouseLeave }) => {
  const { id, category, icon, sub_category } = item;
 

  return (
    <div className="h-24 w-full">
      <div
        onMouseEnter={() => handleMouseEnter(sub_category)}
        onMouseLeave={handleMouseLeave}
        className=" flex flex-col cursor-pointer h-24 w-36  p-2 lg:p-0 items-center justify-center rounded-xl"
      >
        <div>
          <Image src={icon} width={30} height={30} alt={category} />
        </div>
        <div>
          <h4 className="font-bold text-xs text-center">{category}</h4>
        </div>        
      </div>
    </div>
  );
};

export default CategoriesCart;
