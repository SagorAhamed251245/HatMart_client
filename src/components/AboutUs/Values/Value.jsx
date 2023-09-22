import Image from "next/image";
import React from "react";
import img from "../../../assets/icons/tick-icon-30.png";

const Value = () => {
  return (
    <div className="space-y-2 h-[100%]">
      <div className="flex items-center gap-1 bg-transparent shadow-lg h-[auto]">
        <Image src={img} width={25} height={28} alt="value"></Image>
        <div className="h-auto lg:h-15">
          <h2 className="font-bold text-black dark:text-white">
            Quality Products
          </h2>{" "}
          {/* Apply text-black class */}
          <p className="text-black dark:text-white">
            We are committed to providing the highest quality products for our
            customers.
          </p>
        </div>
      </div>

      <div className="flex  items-center gap-1 bg-transparent shadow-lg h-[auto]">
        <Image src={img} width={25} height={28} alt="value"></Image>
        <div className="h-auto lg:h-15">
          <h2 className="font-bold text-black dark:text-white">
            Excellent Service
          </h2>{" "}
          {/* Apply text-black class */}
          <p className="text-black dark:text-white">
            Our top priority is delivering excellent customer service to meet
            your needs.
          </p>
        </div>
      </div>

      <div className="flex gap-1  items-center bg-transparent shadow-lg h-[auto]">
        <Image src={img} width={25} height={28} alt="value"></Image>
        <div className="h-auto lg:h-15">
          <h2 className="font-bold text-black dark:text-white">
            Community Engagement
          </h2>{" "}
          {/* Apply text-black class */}
          <p className="text-black dark:text-white">
            We actively participate in and support the local community to make a
            positive impact.
          </p>
        </div>
      </div>

      <div className="flex gap-1  items-center bg-transparent shadow-lg h-[auto]">
        <Image src={img} width={25} height={28} alt="value"></Image>
        <div className="h-auto lg:h-15">
          <h2 className="font-bold text-black dark:text-white">
            Sustainability
          </h2>{" "}
          {/* Apply text-black class */}
          <p className="text-black dark:text-white">
            We take eco-friendly initiatives to ensure a sustainable future for
            our planet.
          </p>
        </div>
      </div>

      <div className="flex gap-1  items-center bg-transparent shadow-lg h-[auto]">
        <Image src={img} width={25} height={28} alt="value"></Image>
        <div className="h-auto lg:h-15">
          <h2 className="font-bold text-black dark:text-white">
            Sustainability
          </h2>{" "}
          {/* Apply text-black class */}
          <p className="text-black dark:text-white">
            We take eco-friendly initiatives to ensure a sustainable future for
            our planet. One of the most urgent global challenges
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
