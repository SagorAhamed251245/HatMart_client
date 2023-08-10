"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

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
    <header className=" p-5 w-full lg:w-[1380px] mx-auto">
      {/* main bannner + sidebanner */}
      <div className="lg:flex lg:flex-row flex-col w-full gap-6">
        {/* main banner starts here */}
        <section className="w-[880px] lg:mb-0 mb-3">
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
                <div className=" lg:w-screen lg:h-[498px] w-[374px] h-[200px] -mt-8 relative  ">
                  <Image
                    fill
                    className="object-contain object-left"
                    src={banner.image}
                    alt="side banner image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        {/* main banner ends here */}
        {/* side banner starts here */}
        <section className="flex lg:flex-col lg:gap-6 gap-3 flex-row">
          {side.map((banner) => (
            <div
              key={banner.id}
              className="lg:h-full lg:w-[438px] w-1/2 h-[100px] relative"
            >
              <Image
                fill
                className=" rounded"
                src={banner.image}
                alt="side banner image"
              ></Image>
            </div>
          ))}
        </section>
        {/* side banner ends here */}
      </div>

      {/* bottom banners starts here for website*/}
      <section className=" lg:flex hidden mt-[24px] h-[250px]  gap-6">
        {bottom.map((banner) => (
          <div key={banner.id} className="h-full w-full ">
            <Image
              height={130}
              width={438}
              className="w-full h-full rounded"
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
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {bottom.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="h-full w-full">
                <Image
                  height={130}
                  width={438}
                  className="w-full h-[200px] rounded"
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
