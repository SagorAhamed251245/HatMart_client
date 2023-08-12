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
    <div className=" hover:h-96  ">
      <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=" flex flex-col cursor-pointer lg:h-24  h-18 p-2 lg:p-0 items-center justify-center rounded-xl"
    >
      <div>
        <Image src={icon} width={30} height={30} alt={category} />
      </div>
      <div>
        <h4 className="font-bold text-xs text-center">{category}</h4>
      </div>
      {showSubCategory && (
        <div className="relative h-auto">
          <SubCategories sub_category={sub_category}></SubCategories>
        </div>
      )}
    </div>
    </div>
  );
};

export default CategoriesCart;
