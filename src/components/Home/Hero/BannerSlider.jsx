"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
const BannerSlider = ({ main }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % main.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [main.length]);
  return (
    <>
      <div className="md:w-full md:mb-5 lg:w-[70%] lg:mb-0 relative h-56 md:h-[450px] w-full rounded-xl overflow-hidden">
        {main.map((banner, index) => (
          <div
            key={banner._id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              height={949}
              width={450}
              className="w-full h-56 md:h-full  object-cover rounded-xl"
              priority
              src={banner.image}
              alt="side banner image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BannerSlider;
