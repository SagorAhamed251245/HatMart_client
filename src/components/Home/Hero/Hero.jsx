"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [main, setMain] = useState([]);
  const [side, setSide] = useState([]);
  const [bottom, setBottom] = useState([]);

  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => {
        const mainBanner = data.filter((banner) => banner.type === "main");
        const sideBanner = data.filter((banner) => banner.type === "side");
        const bottomBanner = data.filter((banner) => banner.type === "bottom");
        setMain(mainBanner);

        setSide(sideBanner);

        setBottom(bottomBanner);
      });
  }, []);

  return (
    <header className="  w-full md:w-[90%] mx-auto overflow-hidden">
      {/* main bannner + sidebanner */}
      <section className="lg:flex lg:flex-row flex-col  gap-5  w-full">
        {/* main banner starts here */}
        <div className="md:w-[70%]  lg:mb-0  rounded-lg">
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
            {main.map((banner) => (
              <SwiperSlide key={banner.id}>
                <div className="  relative h-[200px] lg:h-[450px] w-full rounded-xl">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    className=" rounded-xl"
                    src={banner.image}
                    alt="side banner image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* main banner ends here */}
        {/* side banner starts here */}
        <div className="flex lg:flex-col md:w-[30%] lg:gap-6 gap-3 flex-row">
          {side.map((banner) => (
            <div
              key={banner.id}
              className="lg:h-full  w-full rounded-lg relative"
            >
              <Image
                layout="fill"
                objectFit="cover"
                className=" rounded-xl"
                src={banner.image}
                alt="side banner image"
              ></Image>
            </div>
          ))}
        </div>
        {/* side banner ends here */}
      </section>

      {/* bottom banners starts here for website*/}
      <section className=" lg:flex hidden mt-[24px] h-[250px]  gap-6">
        {bottom.map((banner) => (
          <div key={banner.id} className="h-full w-full ">
            <Image
              height={130}
              width={438}
              className="w-full h-full rounded-xl"
              src={banner.image}
              alt="side banner image"
            ></Image>
          </div>
        ))}
      </section>
      {/* bottom banner ends here for website*/}
      {/* bottom banner starts here for mobile*/}
      <div className="block lg:hidden mt-3">
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {bottom.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="h-full w-full">
                <Image
                  height={130}
                  width={438}
                  className="w-full h-[200px] rounded-xl"
                  src={banner.image}
                  alt="side banner image"
                ></Image>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
};

export default Hero;
