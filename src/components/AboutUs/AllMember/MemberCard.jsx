import Image from "next/image";
import React from "react";
import "./member.css";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutubeSquare,
} from "react-icons/fa";

const MemberCard = ({ member }) => {
  const { name, image, gmail } = member;
  return (
    <div className="card w-96 mt-4">
      <figure className="circle mb-3">
        <Image src={image} width={100} height={100} alt="member card" />
      </figure>

      <div className="card-body items-center text-center mt-12 ml-10">
        <h2 className="card-title">{name}</h2>
        <p>{gmail}</p>
        <div className="flex gap-3">
          <a
            href={`https://www.facebook.com/${member.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="social-icon" />
          </a>
          <a
            href={`https://www.linkedin.com/in/${member.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href={`https://twitter.com/${member.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            href={`https://www.youtube.com/user/${member.youtube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutubeSquare className="social-icon" />
          </a>
          <a
            href={`https://github.com/${member.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
