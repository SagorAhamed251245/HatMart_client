"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CategoriesCart from "./CategoriesCart";

const ChildCategories = ({ categories }) => {
  const swiperStyles = {
    position: "static", // Set the desired positioning
    // Add more custom styles here if needed
  };
  return (
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
      style={swiperStyles}
    >
      <div className="flex flex-row items-center justify-between  overflow-x-auto">
        {categories?.map((item) => (
          <CategoriesCart key={item._id} item={item}></CategoriesCart>
        ))}
      </div>
    </Swiper>
  );
};

export default ChildCategories;
