import React from "react";
import img from "@/assets/icons/faq.jpg";
import Image from "next/image";

const FaqImg = () => {
  return (
    <div>
      <Image src={img} width={600} height={400} alt="image name"></Image>
    </div>
  );
};

export default FaqImg;
