import React from "react";
import img from "@/assets/icons/faq.jpg";
import Image from "next/image";

const FaqImg = () => {
  return (
    <div>
      <Image
        className="lg:h-[350px] lg:pt-14 lg:pl-8 pl-0 lg:w-[600px] h-full w-full"
        src={img}
        width={600}
        height={400}
        alt="image name"
      ></Image>
    </div>
  );
};

export default FaqImg;
