

import getCategories from "@/utils/getCategories";
import ChildCategories from "./ChildCategories";

const Categories = async () => {
  
const categories = await getCategories()
  
  return (
    <section className="w-[90%] mx-auto hover:bg-white hover:transition hover:shadow-lg  duration-1000 ease-in-out">
     <ChildCategories categories={categories}></ChildCategories>
    </section>
  );
};

export default Categories;
