import logo from "@/assets/icons/hatmartLogo.svg";
import Image from "next/image";

const LogoSVG = () => {
  return (
    <div className="relative h-10 md:h-14 w-10 md:w-14">
      <Image
        src={logo}
        layout="fill"
        objectFit="cover"
        alt="HatMart Logo"
      ></Image>
    </div>
  );
};

export default LogoSVG;
