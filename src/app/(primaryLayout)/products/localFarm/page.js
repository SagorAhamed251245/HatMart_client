import LocalFarmProducts from "@/components/Home/Products/LocalFarmProducts/LocalFarmProducts";
import getProducts from "@/utils/getProducts";
import React from "react";

const localFarmProductsPage = async () => {
  const products = await getProducts();
  return (
    <>
      <section className="w-[90%] mx-auto">
        <LocalFarmProducts products={products} />
      </section>
    </>
  );
};

export default localFarmProductsPage;
