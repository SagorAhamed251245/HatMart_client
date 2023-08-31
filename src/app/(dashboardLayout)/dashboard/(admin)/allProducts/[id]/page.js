import DescriptionAndReviews from "@/components/Home/Products/ProductDetailsPage/DescriptionAndReviews";
import ProductDetails from "@/components/Home/Products/ProductDetailsPage/ProductDetails";
import ProductImages from "@/components/Home/Products/ProductDetailsPage/ProductImages";
import getSingleProduct from "@/utils/getSingleProduct";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const productData = await getSingleProduct(params.id);

  return (
    <div>
      <Link href={`/dashboard/allProducts/editProduct/${params.id}`}>
        <button className="btn bg-orange-400 text-white ">Edit Product</button>
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
    </div>
  );
};

export default page;
