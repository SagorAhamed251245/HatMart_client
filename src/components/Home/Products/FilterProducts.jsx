import { useEffect, useState } from "react";

const FilterProducts = (products, sectionTitle) => {
  const [allProduct, setProduct] = useState([]);
  useEffect(() => {
    if (sectionTitle === "Popular Products") {
      const filteredProducts = products.filter((p) => p?.viewCount > 15);
      setProduct(filteredProducts.sort((a, b) => b.viewCount - a.viewCount));
    } else if (sectionTitle === "Trending Products") {
      const filteredProducts = products.filter(
        (p) => p?.rating > 4 && p?.estimateSells > 10 && p?.viewCount > 15
      );

      function compareProducts(a, b) {
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }

        if (a.estimateSells !== b.estimateSells) {
          return a.estimateSells - b.estimateSells;
        }

        return b.viewCount - a.viewCount;
      }

      const sortedProducts = [...filteredProducts].sort(compareProducts);

      setProduct(sortedProducts);
    } else if (sectionTitle === "Best Selling Products") {
      const filteredProducts = products.filter((p) => p?.estimateSells > 10);
      setProduct(
        filteredProducts.sort((a, b) => b.estimateSells - a.estimateSells)
      );
    } else if (sectionTitle === "Discount Product") {
      const filteredProducts = products.filter((p) => p?.discount_percent > 0);
      filteredProducts.sort(() => Math.random() - 0.5);
      setProduct([...filteredProducts]);
    } else {
      return;
    }
  }, [products, sectionTitle]);
  return allProduct;
};

export default FilterProducts;
