import DescriptionAndReviews from "@/components/Home/Products/ProductDetailsPage/DescriptionAndReviews";
import ProductDetails from "@/components/Home/Products/ProductDetailsPage/ProductDetails";
import ProductImages from "@/components/Home/Products/ProductDetailsPage/ProductImages";
import Link from "next/link";
import React from "react";

const ViewDetails = ({ productData, id }) => {
  return (
    <>
      <Link
        className="btn bg-orange-400 text-white "
        href={`/dashboard/allProducts/editProduct/${id}`}
      >
        Edit Product
      </Link>
      <section className=" mt-16 mb-20 md:w-[90%] mx-auto">
        <div className="md:flex gap-10">
          <ProductImages productData={productData} />

          <ProductDetails productData={productData} />
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
