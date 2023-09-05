import Image from "next/image";
import React from "react";
import img from "../../../assets/icons/tick-icon-30.png";

const Value = () => {
  return (
    <div className="space-y-2">
      <div className="flex gap-1 bg-white shadow-lg">
        <Image src={img} width={25} height={5}></Image>
        <div>
          <h2 className="font-bold">Quality Products</h2>
          <p>
            We are committed to providing the highest quality products for our
            customers.
          </p>
        </div>
      </div>

      <div className="flex gap-1 bg-white shadow-lg">
        <Image src={img} width={25} height={5}></Image>
        <div>
          <h2 className="font-bold">Excellent Service</h2>
          <p>
            Our top priority is delivering excellent customer service to meet
            your needs.
          </p>
        </div>
      </div>

      <div className="flex gap-1 bg-white shadow-lg">
        <Image src={img} width={25} height={5}></Image>
        <div>
          <h2 className="font-bold">Community Engagement</h2>
          <p>
            We actively participate in and support the local community to make a
            positive impact.
          </p>
        </div>
      </div>

      <div className="flex gap-1 bg-white shadow-lg">
        <Image src={img} width={25} height={5}></Image>
        <div>
          <h2 className="font-bold">Sustainability</h2>
          <p>
            We take eco-friendly initiatives to ensure a sustainable future for
            our planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
