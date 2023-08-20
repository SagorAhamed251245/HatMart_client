

import getCategories from "@/utils/getCategories";
import ChildCategories from "./ChildCategories";

const Categories = async () => {
  
const categories = await getCategories()
  
  return (
    <section className="w-[90%] mx-auto bg-white ">
     <ChildCategories categories={categories}></ChildCategories>
    </section>
  );
};

export default Categories;
