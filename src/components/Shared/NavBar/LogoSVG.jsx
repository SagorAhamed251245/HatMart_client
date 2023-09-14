import logo from "@/assets/icons/hatmartLogo.svg";
import Image from "next/image";
import Link from "next/link";

const LogoSVG = () => {
  return (
    <div className="relative h-10 md:h-12 lg:h-14 w-10 md:w-12 lg:w-14">
      <Link href={"/"}>
        <Image
          src={logo}
          className="object-cover w-full"
          height={400}
          width={600}
          alt="HatMart Logo"
        ></Image>
      </Link>
    </div>
  );
};

export default LogoSVG;
