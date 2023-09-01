import Image from "next/image";
import React from "react";
import img from "@/assets/images/engin-akyurt-Y5n8mCpvlZU-unsplash.jpg";

const AboutBanner = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-full overflow-hidden h-96">
        <Image
          className="w-full object-cover"
          src={img}
          width={1200}
          height={800}
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-white text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl">
          Discover more about us and what we do.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
