import React from "react";
import AddProductForm from "./AddProductForm";
import SectionTitle from "@/components/Home/Products/SectionTitle";
import getCategories from "@/utils/getCategories";

const AddProduct = async () => {
  const ProductCategory = await getCategories();
  let subCategory = [];
  for (const category of ProductCategory) {
    for (const sub_category of category.sub_category) {
      subCategory.push(sub_category);
    }
  }
  console.log(subCategory);
  return (
    <section>
      <SectionTitle>Add a New Product</SectionTitle>
      <AddProductForm ProductCategory={ProductCategory} subCategory={subCategory}></AddProductForm>
    </section>
  );
};

export default AddProduct;
