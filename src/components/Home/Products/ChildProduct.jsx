"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const ChildProduct = ({ products, sectionTitle }) => {
  const [allProduct, setProduct] = useState([]);

  useEffect(() => {
    if (sectionTitle === "Popular Products") {
      const filteredProducts = products.filter((p) => p?.viewCount > 5);
      setProduct(filteredProducts);
    } else if (sectionTitle === "Trending Products") {
      const filteredProducts = products.filter((p) => p?.rating > 2);
      setProduct(filteredProducts);
    } else {
      return;
    }
  }, [products, sectionTitle]);

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
      modules={[Autoplay]}
      className="mySwiper"
    >
      <div className="">
        {allProduct.map((product) => (
          <SwiperSlide key={product._id}>
            {/* product card */}
            <ProductCard handleAddToCart={handleAddToCart} product={product} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default ChildProduct;
