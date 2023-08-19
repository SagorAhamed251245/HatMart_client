"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CategoriesCart from "./CategoriesCart";

const ChildCategories = ({ categories }) => {
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
      className="mySwiper flex z-20"
    >
      <div className="">
        {categories?.map((item) => (
          <SwiperSlide key={item._id}>
            <CategoriesCart key={item._id} item={item}></CategoriesCart>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default ChildCategories;
