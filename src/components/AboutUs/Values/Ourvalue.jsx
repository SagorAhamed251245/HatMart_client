import Image from "next/image";
import React from "react";
import img from "@/assets/images/hatmartgro.jpg";
import Value from "./Value";

const Ourvalue = () => {
  return (
    <div className="mb-5">
      <h2 className="text-center font-bold text-2xl mt-8 mb-8">Our Values</h2>
      <section className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-center gap-3">
          <div>
            <Image src={img} width={700} height={100} alt="our value"></Image>
          </div>
          <div>
            <Value></Value>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourvalue;
