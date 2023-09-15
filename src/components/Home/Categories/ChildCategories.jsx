"use client";

import React, { useRef, useState } from "react";

import CategoriesCart from "./CategoriesCart";
// swiper
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import SubCategories from "./SubCategories";
import "./swiper.css";

const ChildCategories = ({ categories }) => {
  // state
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [SubCategory, setSubCategory] = useState([]);

  const handleMouseEnter = (sub_category) => {
    setShowSubCategory(true);
    setSubCategory(sub_category);
  };
  const handleMouseLeave = () => {
    setShowSubCategory(false);
  };

  return (
    <div className="flex flex-row items-center justify-between">
      <Swiper
        onTouchMoveCapture={true}
        modules={[Pagination, Navigation]}
        className={`mySwiper`}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 8,
            spaceBetween: 30,
          },
        }}
        watchOverflow={true}
      >
        {categories?.map((item) => (
          <SwiperSlide>
            <CategoriesCart
              key={item._id}
              item={item}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            ></CategoriesCart>
          </SwiperSlide>
        ))}
      </Swiper>
      {showSubCategory && (
        <div
          onMouseEnter={() => setShowSubCategory(true)}
          onMouseLeave={handleMouseLeave}
          className="h-auto mt-5  absolute z-30 w-auto bg-white shadow-2xl left-10 right-10 top-40"
        >
          <SubCategories sub_category={SubCategory}></SubCategories>
        </div>
      )}
    </div>
  );
};

export default ChildCategories;
