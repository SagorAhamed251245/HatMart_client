"use client";
import { useEffect, useState } from "react";
import CategoriesCart from "./CategoriesCart";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="w-[90%] mx-auto overflow-hidden ">
      <Swiper
        slidesPerView={10}
        spaceBetween={30}
        breakpoints={{
          // For screens less than 640px wide
          340: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          // For screens between 640px and 767px wide
          767: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          // For screens between 768px and 1023px wide
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          // For screens 1024px wide and above
          1025: {
            slidesPerView: 10,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper flex"
      >
        <div>
          {categories.map((item) => (
            <SwiperSlide key={item.id}>
              <CategoriesCart key={item.id} item={item}></CategoriesCart>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Categories;
