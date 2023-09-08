import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const AboutSection = () => {
  return (
    <>
      <section className="text-center lg:text-start">
        {/* title */}
        <h4 className="text-black font-semibold">Information</h4>
        <div className="text-gray-800 flex flex-col lg:items-start items-center">
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm">
              <Link
                href={"/aboutUs"}
                className="hover:text-green-400 transition"
              >
                About us
              </Link>
            </span>
          </div>
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm">
              <Link href={"/privacyPolicy"}>Privacy Policy</Link>
            </span>
          </div>
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm">
              <Link href={"/terms"} className="hover:text-green-400 transition">
                Terms & condtions
              </Link>
            </span>
          </div>
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm">
              <Link href={"/faq"}>FAQ</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
