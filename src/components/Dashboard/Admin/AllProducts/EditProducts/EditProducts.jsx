import React from "react";
import SectionTitle from "@/components/Home/Products/SectionTitle";
import getCategories from "@/utils/getCategories";
import getProducts from "@/utils/getProducts";
import AddProductForm from "../../AddProduct/AddProductForm";

const EditProducts = async ({_id}) => {
    const ProductCategory = await getCategories();
    const products = await getProducts();
    
  return (
    <section>
      <SectionTitle>Edit Product</SectionTitle>
      <AddProductForm ProductCategory={ProductCategory} products={products} _id={_id} ></AddProductForm>
    </section>
  );
};

export default EditProducts;