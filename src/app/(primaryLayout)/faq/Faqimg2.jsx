import Image from "next/image";
import React from "react";
import img from "@/assets/icons/faq2.jpg";

const Faqimg2 = () => {
  return (
    <div className="h-[350px] lg:h-1/4">
      {" "}
      <Image
        className="h-[300px] pl-5"
        src={img}
        width={600}
        height={400}
        alt="image name"
      ></Image>{" "}
    </div>
  );
};

export default Faqimg2;
