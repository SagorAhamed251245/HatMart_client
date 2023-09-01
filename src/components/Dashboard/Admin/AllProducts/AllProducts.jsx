"use client";

import React, { useEffect, useState } from "react";
import ProductSearch from "./ProductSearch";
import AllProductsCard from "./AllProductsCard";
import AllProductsFilterByPrice from "./AllProductsFilterByPrice";
import AllProductsFilterBySCategory from "./AllProductsFilterBySCategory";
import AllProductsFilterByOther from "./AllProductsFilterByOther";

const AllProducts = ({ ProductCategory, products }) => {
  const [data, setData] = useState(products);

  const handleDeleteProduct = (_id) => {
    // TODO: delete Product
    console.log(_id, "delete this product");
  };

  return (
    <>
      <div className="flex items-center justify-between lg:flex-row flex-col lg:items-end px-10">
        {/* title here */}
        <div className="mb-4 lg:mb-0">
          <h3 className="text-4xl font-semibold mb-2">All Products</h3>
          <p className="text-sm">
            In this page An admin can delete, Edit, search, and filter any data
            to his/her choice.
          </p>
        </div>
        {/* title ends here */}
        {/* Search function here */}
        <ProductSearch products={products} setData={setData} />
      </div>

      {/* filter here */}
      <div>
        <div className="flex lg:flex-row flex-col justify-end gap-6 items-center my-6 px-10">
          <span className="font-bold my-6 text-gray-500">Filter By:</span>
          {/* select by price */}

          <AllProductsFilterByPrice setData={setData} data={data} />

          {/* select by category */}

          <AllProductsFilterBySCategory
            setData={setData}
            products={products}
            ProductCategory={ProductCategory}
          />

          {/* select by other */}
          <AllProductsFilterByOther setData={setData} products={products} />
        </div>
      </div>

      {/* data cards */}
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-6 my-10 mx-10">
        {/* product cards  */}

        {data.map((product) => (
          <AllProductsCard
            key={product._id}
            product={product}
            handleDeleteProduct={handleDeleteProduct}
          />
        ))}

        {/* This idea was from Ni Fahad which worked but not very useful for this part of the work */}

        {/* {
          products.filter(item => (item?.title).toLowerCase() === searchData.toLowerCase()).map(product => <AllProductsCard key={product._id}  />)
        } */}
      </section>
    </>
  );
};

export default AllProducts;
