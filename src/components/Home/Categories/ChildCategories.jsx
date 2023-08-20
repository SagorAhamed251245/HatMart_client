import CategoriesCart from "./CategoriesCart";

const ChildCategories = ({ categories }) => {
  return (
    <div className="flex flex-row items-center justify-between  overflow-x-auto scrollbar">
      {categories?.map((item) => (
        <CategoriesCart key={item._id} item={item}></CategoriesCart>
      ))}
    </div>
  );
};

export default ChildCategories;
