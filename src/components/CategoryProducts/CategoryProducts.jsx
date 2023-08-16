"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "../Home/Products/SectionTitle";
import ProductCard from "../Home/Products/ProductCard";
import Image from "next/image";
import GetProducts from "@/utils/getProducts";
import noProductImage from "@/assets/images/no-products.jpg";
import FilterAsPrice from "./FilterAsPrice";

const CategoryProducts = ({ searchParams }) => {
  const [products] = GetProducts();
  const [viewAsList, setViewAsList] = useState(false);

  const [sortOrder, setSortOrder] = useState("bestMatch");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const filterProduct = products.filter((product) =>
    product.sub_category.find((sub) => sub === searchParams.sub_category)
  );

  useEffect(() => {
    let sortedProducts = [...filterProduct];
    if (sortOrder === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    setFilteredProducts(sortedProducts);
  }, [filterProduct, sortOrder]);

  return (
    <section className="md:w-[90%] mx-auto min-h-screen mb-24">
      <FilterAsPrice
        setSortOrder={setSortOrder}
        sortOrder={sortOrder}
        setViewAsList={setViewAsList}
      ></FilterAsPrice>
      <SectionTitle>
        <small>Category/{searchParams.sub_category}</small>
      </SectionTitle>
      {filteredProducts.length === 0 ? (
        <>
          <div className="justify-center flex items-center">
            <Image
              src={noProductImage}
              alt="No product found image"
              height={300}
              width={500}
            ></Image>
          </div>
        </>
      ) : (
        <>
          <div
            className={
              !viewAsList
                ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
                : "grid grid-cols-1 gap-5"
            }
          >
            {filteredProducts.map((product) => (
              <div key={product._id} className="col-span-1 ">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default CategoryProducts;
