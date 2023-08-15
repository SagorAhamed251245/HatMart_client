"use client";
// import { useRouter } from "next/router";

import ProductCard from "@/components/Home/Products/ProductCard";
import SectionTitle from "@/components/Home/Products/SectionTitle";
import GetProducts from "@/utils/getProducts";
import Image from "next/image";
import noProductImage from "@/assets/images/no-products.jpg";

const CategoryProductsPage = ({ searchParams }) => {
  console.log(searchParams);
  const [products] = GetProducts();
  const filterProduct = products.filter((product) =>
    product.sub_category.find((sub) => sub === searchParams.sub_category)
  );

  return (
    <>
      <section className="md:w-[90%] mx-auto min-h-screen mb-24">
        <SectionTitle>Products for {searchParams.sub_category}</SectionTitle>
        {filterProduct.length === 0 ? (
          <>
            <div className="justify-center flex items-center">
              <Image
                src={noProductImage}
                alt="Np product found image"
                height={300}
                width={500}
                
              ></Image>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filterProduct.map((product) => (
                <div key={product._id} className="col-span-1">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default CategoryProductsPage;
