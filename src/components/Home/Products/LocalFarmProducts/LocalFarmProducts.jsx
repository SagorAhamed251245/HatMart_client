"use client";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import SectionTitle from "../SectionTitle";
import FIlterLocalProduct from "./FIlterLocalProduct";
import getProductByText from "@/utils/getProductByText";

const LocalFarmProducts = ({ products }) => {
  const [data, setData] = useState([]);

  const [location, setLocation] = useState("");

  useEffect(() => {
    if (location === "") {
      const filteredProducts = products.filter((p) => p?.isLocal === true);
      setData(filteredProducts);
    } else {
      (async () => {
        const data = await getProductByText(location);
        setData(data);
      })();
    }
  }, [location]);
  return (
    <>
      <FIlterLocalProduct setLocation={setLocation} />

      {/* filter here */}
      <SectionTitle> Local Farm Products </SectionTitle>

      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2   gap-5 my-10 ">
        {data.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default LocalFarmProducts;
