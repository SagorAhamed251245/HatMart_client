import Image from "next/image";
import React from "react";
import img from "@/assets/icons/faq2.jpg";

const Faqimg2 = () => {
  return (
    <div className="h-[350px] lg:w-[600px] pt-8">
      {" "}
      <Image
        className="h-[300px] lg:pl-5 sm:w-full"
        src={img}
        width={500}
        height={400}
        alt="image name"
      ></Image>{" "}
    </div>
  );
};

export default Faqimg2;
