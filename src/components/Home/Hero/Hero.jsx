"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <header className=" p-5 w-[1380px] mx-auto">
      <div className="flex items-center w-full gap-6">
        <section className="w-[880px] ">
          <Swiper
            spaceBetween={5}
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                height={427}
                width={880}
                className=" rounded w-full  "
                src={"/hatmart-custom-2.png"}
                alt="side banner image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                height={427}
                width={880}
                className=" rounded w-full "
                src={"/hatmart-custom-3.png"}
                alt="side banner image"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="">
          <Image
            height={300}
            width={450}
            className=" rounded mb-6"
            src={"/side-banner-1.png"}
            alt="side banner image"
          ></Image>
          <Image
            height={300}
            width={438}
            className="w-full rounded"
            src={"/side-banner-2.png"}
            alt="side banner image"
          ></Image>
        </section>
      </div>

      <section className="lg:grid-cols-3 mt-[24px] h-[250px] grid gap-6">
        <div className="h-full w-full ">
          <Image
            height={130}
            width={438}
            className="w-full h-full rounded"
            src={"/center-banner-1-380x190.png"}
            alt="side banner image"
          ></Image>
        </div>
        <div className="h-full w-full ">
          <Image
            height={130}
            width={438}
            className="w-full h-full rounded"
            src={"/center-banner-2-380x190.png"}
            alt="side banner image"
          ></Image>
        </div>
        <div className="h-full w-full ">
          <Image
            height={130}
            width={438}
            className="w-full h-full rounded"
            src={"/center-banner-1-380x190.png"}
            alt="side banner image"
          ></Image>
        </div>
      </section>
    </header>
  );
};

export default Hero;
