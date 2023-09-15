import DescriptionAndReviews from "@/components/Home/Products/ProductDetailsPage/DescriptionAndReviews";
import ProductImages from "@/components/Home/Products/ProductDetailsPage/ProductImages";
import Link from "next/link";
import React from "react";
import ProductDetailsDashBoard from "./ProductDetailsDashBoard";

const ViewDetails = ({ productData, id }) => {
  return (
    <>
      
      <section className=" mt-16 mb-20 md:w-[90%] mx-auto">
        <div className="md:flex gap-10">
          <ProductImages productData={productData} />

          <ProductDetailsDashBoard productData={productData} />
        </div>

        <DescriptionAndReviews
          id={productData?._id}
          productData={productData}
        />
      </section>
    </>
  );
};

export default ViewDetails;
