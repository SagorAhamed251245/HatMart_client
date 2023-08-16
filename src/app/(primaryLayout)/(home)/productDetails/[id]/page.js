"use client";

import DescriptionAndReviews from "@/components/Home/Products/ProductDetailsPage/DescriptionAndReviews";
import ProductDetails from "@/components/Home/Products/ProductDetailsPage/ProductDetails";
import ProductImages from "@/components/Home/Products/ProductDetailsPage/ProductImages";
import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";

const ProductDetailsPage = ({ params }) => {
  const [productData, setProductData] = useState([]);
  const [mainImage, setMainImage] = useState(
    "https://i.ibb.co/8rmC3MW/image.png"
  ); // Set initial state to null

  // Fetch data
  useEffect(() => {
    fetch(`/products.json`)
      .then((res) => res.json())
      .then((data) => {
        // Find product data and update mainImage
        const productData = data.find((product) => product._id === params.id);
        setProductData(productData);
        setMainImage(productData.images[0]);
      });
  }, []);

  // Main product image change handler
  const handleMainImage = (image) => {
    setMainImage(image);
  };
  return (
    <section className="mt-36 mb-20 md:w-[90%] mx-auto">
      <div className="md:flex gap-10">
        {/* Product images */}
        <ProductImages
          handleMainImage={handleMainImage}
          mainImage={mainImage}
          productData={productData}
        />
        {/* Product Details */}
        <ProductDetails productData={productData} />
      </div>
      {/* Product Description and Reviews */}
      <DescriptionAndReviews id={productData._id} productData={productData} />
    </section>
  );
};

export default ProductDetailsPage;
