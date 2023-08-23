import logo from "@/assets/icons/hatmartLogo.svg";
import Image from "next/image";
import Link from "next/link";

const LogoSVG = () => {
  return (
    <div className="relative h-10 md:h-14 w-10 md:w-14">
      <Link href={"/"}>
        <Image
          src={logo}
          layout="fill"
          objectFit="cover"
          alt="HatMart Logo"
        ></Image>
      </Link>
    </div>
  );
};

export default LogoSVG;
