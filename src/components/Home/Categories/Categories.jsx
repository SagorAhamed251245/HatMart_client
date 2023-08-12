"use client";
import React, { useEffect, useState } from "react";
import CategoriesCart from "./CategoriesCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="w-[90%] mx-auto hover:bg-white hover:transition hover:shadow-lg hover:h-[400px]  duration-1000 ease-in-out">
      <Swiper
        slidesPerView={10}
        spaceBetween={30}
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          767: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1025: {
            slidesPerView: 10,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper flex z-20"
      >
        <div className="">
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
