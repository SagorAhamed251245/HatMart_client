"use client";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import SectionTitle from "../SectionTitle";

const EcoFriendlyProducts = ({ products }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter((p) => p?.isEocFriendly === true);
    setData(filteredProducts);
  }, []);
  return (
    <>
      {/* filter here */}
      <SectionTitle> Eco-Friendly Products </SectionTitle>

      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2   gap-5 my-10 ">
        {data.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default EcoFriendlyProducts;
