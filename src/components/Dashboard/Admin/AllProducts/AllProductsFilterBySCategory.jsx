import React, { useEffect, useState } from "react";

const AllProductsFilterBySCategory = ({
  products,
  setData,
  ProductCategory,
}) => {

    // This page is for filter or sort by sub_Category
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    const subCategories = ProductCategory.flatMap((item) => item.sub_category);
    setSubCategory(subCategories);
  }, [ProductCategory]);

  useEffect(() => {
    const subCategories = ProductCategory.flatMap((item) => item.sub_category);
    setSubCategory(subCategories);
  }, [ProductCategory]);

  const sortProductsBySubcategory = (subCategory) => {
    if (!subCategory) {
      setData(products);
      return;
    }

    const sortedData = products.filter((product) =>
      product.sub_category.includes(subCategory)
    );

    setData(sortedData); 
  };

  useEffect(() => {
    sortProductsBySubcategory(selectedSubCategory); 
  }, [selectedSubCategory]);

  return (
    <select
      className="border border-green-400 rounded w-fit p-2 shadow-md"
      type="text"
      name="subCatgory"
      onChange={(e) => setSelectedSubCategory(e.target.value)} 
      value={selectedSubCategory} 
    >
      <option value="">All</option>
      {subCategory.map((sub_category, index) => (
        <option key={index} value={sub_category}>
          {sub_category}
        </option>
      ))}
    </select>
  );
};

export default AllProductsFilterBySCategory;
