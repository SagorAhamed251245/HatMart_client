"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules

import ProductCard from "./ProductCard";

import ProductSkeleton from "./ProductSkeleton";
import FilterProducts from "./FilterProducts";
import { Autoplay } from "swiper/modules";
const ChildProduct = ({ products, sectionTitle }) => {
  const allProduct = FilterProducts(products, sectionTitle);

  const handleAddToCart = (id) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingItemIndex = cartItems.findIndex((item) => item._id === id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];

      updatedCartItems[existingItemIndex].quantity += 1;

      const updatedCartItemsString = JSON.stringify(updatedCartItems);

      localStorage.setItem("cartItems", updatedCartItemsString);
    } else {
      const newItem = {
        _id: id,
        quantity: 1,
      };
      const updatedCartItems = [...cartItems, newItem];

      const updatedCartItemsString = JSON.stringify(updatedCartItems);

      localStorage.setItem("cartItems", updatedCartItemsString);
    }
    alert("Product has been added");
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={100}
      freeMode={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 2,
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
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {allProduct.length === 0 ? (
        <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-3 grid-cols-2">
          <div className="md:hidden lg:block">
            <ProductSkeleton />
          </div>
          <div className="hidden md:block">
            <ProductSkeleton />
          </div>
          <div>
            <ProductSkeleton />
          </div>
          <div>
            <ProductSkeleton />
          </div>
        </div>
      ) : (
        allProduct.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard handleAddToCart={handleAddToCart} product={product} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default ChildProduct;
