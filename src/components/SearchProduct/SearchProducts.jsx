"use client";
import { useEffect, useState } from "react";
import FilterAsPrice from "../CategoryProducts/FilterAsPrice";
import ProductCard from "../Home/Products/ProductCard";
import SectionTitle from "../Home/Products/SectionTitle";
import noProductImage from "@/assets/images/no-products.jpg";
import Image from "next/image";

const SearchProducts = ({ searchParams, pageName }) => {
  const [viewAsList, setViewAsList] = useState(false);

  const [sortOrder, setSortOrder] = useState("bestMatch");
  const [searchedProducts, setFilteredProducts] = useState([]);
  const [searchProduct, setFilterProduct] = useState([]);
  console.log(searchParams.search);

  useEffect(() => {
    fetch(`https://hatmart-server.vercel.app/api/v1/auth/product/${searchParams.search}`)
      .then((res) => res.json())
      .then((data) => setFilterProduct(data));
  }, [searchParams.search]);

  useEffect(() => {
    let sortedProducts = [...searchProduct];
    if (sortOrder === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    setFilteredProducts(sortedProducts);
  }, [searchProduct, sortOrder]);

  return (
    <section className="md:w-[90%] mx-auto min-h-screen mb-24">
      <FilterAsPrice
        setSortOrder={setSortOrder}
        sortOrder={sortOrder}
        setViewAsList={setViewAsList}
      ></FilterAsPrice>
      <SectionTitle>
        <small>
          {pageName}/{searchParams.search}
        </small>
      </SectionTitle>
      {searchedProducts.length === 0 ? (
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
            {searchedProducts.map((product) => (
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

export default SearchProducts;
