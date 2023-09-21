import Image from "next/image";
import React from "react";
import img from "../../../assets/icons/tick-icon-30.png";

const Value = () => {
  return (
    <div className="space-y-2">
      <div className="flex gap-1 bg-white shadow-lg h-[auto]">
        <Image src={img} width={25} height={5} alt="value"></Image>
        <div className="h-auto lg:h-15">
          <h2 className="font-bold text-black">Quality Products</h2>{" "}
          {/* Apply text-black class */}
          <p className="text-black">
            We are committed to providing the highest quality products for our
            customers.
          </p>
        </div>
      </div>

      <div className="flex gap-1 bg-white shadow-lg h-[auto]">
        <Image src={img} width={25} height={5} alt="value"></Image>
        <div className="h-auto lg:h-15">
          <h2 className="font-bold text-black">Excellent Service</h2>{" "}
          {/* Apply text-black class */}
          <p className="text-black">
            Our top priority is delivering excellent customer service to meet
            your needs.
          </p>
        </div>
      </div>

      <div className="flex gap-1 bg-white shadow-lg h-[auto]">
        <Image src={img} width={25} height={5} alt="value"></Image>
        <div className="h-auto lg:h-15">
          <h2 className="font-bold text-black">Community Engagement</h2>{" "}
          {/* Apply text-black class */}
          <p className="text-black">
            We actively participate in and support the local community to make a
            positive impact.
          </p>
        </div>
      </div>

      <div className="flex gap-1 bg-white shadow-lg h-[auto]">
        <Image src={img} width={25} height={5} alt="value"></Image>
        <div className="h-auto lg:h-15">
          <h2 className="font-bold text-black">Sustainability</h2>{" "}
          {/* Apply text-black class */}
          <p className="text-black">
            We take eco-friendly initiatives to ensure a sustainable future for
            our planet.
          </p>
        </div>
      </div>

      <div className="flex gap-1 bg-white shadow-lg h-[auto]">
        <Image src={img} width={25} height={5} alt="value"></Image>
        <div className="h-auto lg:h-15">
          <h2 className="font-bold text-black">Sustainability</h2>{" "}
          {/* Apply text-black class */}
          <p className="text-black">
            We take eco-friendly initiatives to ensure a sustainable future for
            our planet. One of the most urgent global challenges
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
