import Image from "next/image";
import Logo from "../../../assets/icons/logo_typography.png";
import {
  FaRegPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import LogoSVG from "../NavBar/LogoSVG";
import Link from "next/link";

const LogoSection = () => {
  return (
    <>
      {/* section 1 */}
      <section className="flex flex-col lg:items-start items-center">
        <div className="flex justify-center items-center">
          <LogoSVG></LogoSVG>
          <div className="relative lg:w-36 md:w-30 w-20 ">
            <Link href={"/"}>
              <Image
                src="https://i.ibb.co/WtbFpmR/logo.png"
                className="object-cover w-full"
                height={100}
                width={300}
                alt="HatMart Logo"
              />
            </Link>
          </div>
        </div>
        <p className="text-gray-800 text-sm font-sans italic">
          "Hatmart is your one-stop for all your grocery needs."
        </p>

        {/* news letter */}
        <div className="flex my-3">
          <div className="py-2 rounded-s-full px-3 w-fit border-2 border-orange-500">
            <input
              className="bg-transparent outline-none w-fit"
              type="text"
              placeholder="Enter your email here"
            />
          </div>
          <button className="hover:text-orange-600  text-white bg-orange-600 duration-300 hover:bg-transparent border-2 border-orange-600 -ml-[2px] px-4 rounded-e-full">
            <FaRegPaperPlane />
          </button>
        </div>
        <span className="text-sm text-gray-800 ">
          Subscribe for our newsletter <br /> by entering your Email address
        </span>
        {/* socials */}
        <div className="mt-5 flex gap-6">
          <div className="text-orange-600 border-2 duration-300 hover:bg-orange-600 hover:text-white cursor-pointer border-orange-600 p-3 w-fit rounded-full">
            <FaFacebookF />
          </div>
          <div className="text-orange-600 border-2 duration-300 hover:bg-orange-600 hover:text-white cursor-pointer border-orange-600 p-3 w-fit rounded-full">
            <FaTwitter />
          </div>
          <div className="text-orange-600 border-2 duration-300 hover:bg-orange-600 hover:text-white cursor-pointer border-orange-600 p-3 w-fit rounded-full">
            <FaLinkedinIn />
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoSection;
