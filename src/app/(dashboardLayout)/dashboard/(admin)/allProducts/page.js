import AllProducts from "@/components/Dashboard/Admin/AllProducts/AllProducts";
import getCategories from "@/utils/getCategories";
import getProducts from "@/utils/getProducts";
import React from "react";


const allProductsPage = async () => {
  const ProductCategory = await getCategories();
  const products = await getProducts();
  return (
    <>
      <AllProducts ProductCategory={ProductCategory} products={products} />
    </>
  );
};

export default allProductsPage;
