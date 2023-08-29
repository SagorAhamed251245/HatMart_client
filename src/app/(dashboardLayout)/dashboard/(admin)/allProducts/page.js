import AllProducts from "@/components/Dashboard/Admin/AllProducts/AllProducts";
import getCategories from "@/utils/getCategories";
import getProducts from "@/utils/getProducts";
import React from "react";
const ProductCategory = await getCategories();
const products = await getProducts();


const allProductsPage = () => {
  return (
    <>
      <AllProducts ProductCategory={ProductCategory} products={products} />
    </>
  );
};

export default allProductsPage;
