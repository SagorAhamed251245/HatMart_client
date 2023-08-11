import Image from "next/image";
import SubCategories from "./SubCategories";
import { useState } from "react";
 

const CategoriesCart = ({ item }) => {
  const { id, category, icon, sub_category } = item;
  const [ShowSubCategory, setShowSubCategory] = useState(false);

   

  return (
    <>
      <div onMouseLeave={() => setShowSubCategory(false)} onMouseOver={() => setShowSubCategory(true)} className="flex flex-col cursor-pointer  lg:h-24 h-18 p-2 lg:p-0 items-center justify-center  rounded-xl">
        <div>
          <Image src={icon} width={30} height={30} alt={category} />
        </div>
        <div>
          <h4 className="font-bold text-xs text-center ">{category}</h4>
        </div>
      
      </div>
      <div onMouseLeave={() => setShowSubCategory(false)} onMouseOver={() => setShowSubCategory(true)} className={`${!ShowSubCategory && "hidden"} absolute top-20 `}>
        <SubCategories key={id} sub_category={sub_category}></SubCategories>
      </div>
    </>

  );
};

export default CategoriesCart;
