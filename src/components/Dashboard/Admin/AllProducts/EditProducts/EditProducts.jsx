import React from "react";
import SectionTitle from "@/components/Home/Products/SectionTitle";
import getCategories from "@/utils/getCategories";
import getProducts from "@/utils/getProducts";
import EditProductForm from "./EditProductForm";

const EditProducts = async ({_id}) => {
    const ProductCategory = await getCategories();
    const products = await getProducts();
    
  return (
    <section>
      <SectionTitle>Edit Product</SectionTitle>
      <EditProductForm ProductCategory={ProductCategory} products={products} _id={_id} ></EditProductForm>
    </section>
  );
};

export default EditProducts;