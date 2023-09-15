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

      // Custom comparison function for sorting
      function compareProducts(a, b) {
        // Sort by rating in descending order
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }

        // Sort by estimateSells in ascending order
        if (a.estimateSells !== b.estimateSells) {
          return a.estimateSells - b.estimateSells;
        }

        // Sort by viewCount in descending order
        return b.viewCount - a.viewCount;
      }

      // Sort the filteredProducts array using the custom comparison function
      const sortedProducts = [...filteredProducts].sort(compareProducts);

      // Set the state with the sorted array
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
