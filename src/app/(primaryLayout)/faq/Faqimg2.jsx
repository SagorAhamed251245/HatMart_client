import Image from "next/image";
import React from "react";
import img from "@/assets/icons/faq2.jpg";

const Faqimg2 = () => {
  return (
    <div>
      <Image src={img} width={600} height={400} alt="image name"></Image>
    </div>
  );
};

export default Faqimg2;
