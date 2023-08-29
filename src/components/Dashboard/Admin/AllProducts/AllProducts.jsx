"use client";

import React, { useEffect, useState } from "react";

import ProductSearch from "./ProductSearch";
import AllProductsCard from "./AllProductsCard";

const AllProducts = ({ ProductCategory,products }) => {
  const [subCategory, setSubCategory] = useState([]);
  const [data, setData] = useState(products);

  
  const handleDeleteProduct = (_id) => {

    // TODO: delete Product
    console.log(_id,'delete this product')
  }

  useEffect(() => {
    const subCategories = ProductCategory.flatMap((item) => item.sub_category);
    setSubCategory(subCategories);
  }, [ProductCategory]);
  return (
    <>
      <div className="flex justify-between items-end px-10">
        {/* title here */}
        <div>
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
        <div className="flex justify-end gap-6 items-center my-6 px-10">
          <span className="font-bold my-6 text-gray-500">Filter By:</span>
          {/* select by price */}
          <select className=" border border-green-400 rounded w-fit p-2 shadow-md">
            <option disabled selected>
              Select By Price
            </option>
            <option>High to low</option>
            <option>Low to High</option>
          </select>
          {/* select by category */}
          <select
            className=" border border-green-400 rounded w-fit p-2 shadow-md"
            type="text"
            name="subCatgory"
          >
            {subCategory.map((sub_category, index) => (
              <option
                key={index}
                value={sub_category}
                defaultValue={sub_category[0]}
              >
                {sub_category}
              </option>
            ))}
          </select>
          {/* select by other */}
          <select className=" border border-green-400 rounded w-fit p-2 shadow-md">
            <option disabled selected>
              Select by others
            </option>
            <option>Latest Added</option>
            <option>Latest Updated</option>
            <option>Best Selling</option>
            <option>High rating</option>
          </select>
        </div>
      </div>

      {/* data cards */}
      <section className="grid grid-cols-3 gap-6 my-10 mx-10">
        {/* product cards  */}

        {
          data.map(product => <AllProductsCard key={product._id} product={product} handleDeleteProduct={handleDeleteProduct}  />)
        }


        {/* This idea was from fahad bhai */}
        {/* {
          products.filter(item => (item?.title).toLowerCase() === searchData.toLowerCase()).map(product => <AllProductsCard key={product._id}  />)
        } */}
        
      </section>
    </>
  );
};

export default AllProducts;
