import Image from "next/image";
import React from "react";
import img from "@/assets/images/hatmartgro.jpg";
import Value from "./Value";

const Ourvalue = () => {
  return (
    <div className="mb-20">
      <h2 className="text-center font-bold text-2xl mt-8 mb-8 dark:text-white">
        Our Values
      </h2>
      <section className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-center gap-3">
          <div className="h-auto lg:h-[250px] w-auto ">
            <Image src={img} width={700} height={300} alt="our value" />
          </div>
          <div className="h-auto lg:h-[250px] w-auto ">
            <Value />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourvalue;
