"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

const Products = ({ sectionTitle }) => {
  const [products, setProducts] = useState([]);

  // fetch data
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div className="mb-20 md:w-[90%] mx-auto overflow-hidden">
      <SectionTitle>{sectionTitle}</SectionTitle>

      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          
          className="mySwiper"
        >
          <div className="">
            {products.map((product) => (
              <SwiperSlide key={product._id}>
                {/* product card */}
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Products;
