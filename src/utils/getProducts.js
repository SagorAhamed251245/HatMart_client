'use client'
import { useEffect, useState } from "react";
const GetProducts = () => {
  const [products, setProducts] = useState([]);

  // fetch data
  useEffect(() => {
    fetch(`/products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products]
};

export default GetProducts;
