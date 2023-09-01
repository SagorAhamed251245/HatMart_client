"use client";

import React, { useEffect, useRef } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { teamMember } from "@/data/teamMember";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

SwiperCore.use([Navigation, Pagination]);

const AllMember = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const autoplayDuration = 5000;

    const interval = setInterval(() => {
      if (swiper) {
        if (swiper.activeIndex === swiper.slides.length - 1) {
          swiper.slideTo(0);
        } else {
          swiper.slideNext();
        }
      }
    }, autoplayDuration);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="py-8">
      <h1 className="text-3xl text-center font-semibold mb-4">
        Our Team Member
      </h1>
      <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6  p-4">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          loop
          className="swiper-container"
          style={{ height: "400px" }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {teamMember.map((member, index) => (
            <SwiperSlide
              key={index}
              className=" shadow-xl border p-4 cursor-pointer w-64 "
            >
              <Link
                href={`/allMember/${member.id}?memberId=${member.id}`}
                passHref
                className="flex flex-col items-center h-full"
              >
                {" "}
                {/* Added h-full */}
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={100}
                  className="mb-3 rounded-lg"
                  style={{ height: "300px" }}
                />
                <div className="text-center h-24">
                  <h2 className="text-xl font-semibold">{member.name}</h2>
                  <p className="text-gray-600">{member.gmail}</p>
                  <div className="flex justify-center mt-2">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-3"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-3"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-3"
                    >
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AllMember;
