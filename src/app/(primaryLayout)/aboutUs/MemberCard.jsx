import Image from "next/image";
import React from "react";
import "./member.css";

const MemberCard = ({ member }) => {
  const { name, image, gmail } = member;
  return (
    <div className="card">
      <figure className="rounded-full">
        <Image
          src={image}
          width={100}
          height={80}
          className=" rounded-full"
          style={{ height: "100px" }}
        ></Image>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{gmail}</p>
      </div>
    </div>
  );
};

export default MemberCard;
