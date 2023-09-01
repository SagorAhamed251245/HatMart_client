import React from "react";
import AddProductForm from "./AddProductForm";
import SectionTitle from "@/components/Home/Products/SectionTitle";
import getCategories from "@/utils/getCategories";

const AddProduct = async () => {
  const ProductCategory = await getCategories();

  return (
    <section>
      <SectionTitle>Add a New Product</SectionTitle>
      <AddProductForm ProductCategory={ProductCategory}></AddProductForm>
    </section>
  );
};

export default AddProduct;
