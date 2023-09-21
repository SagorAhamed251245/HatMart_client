import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full flex  shadow-lg border border-b-white">
      <Link href={"/"} className="flex h-16 ml-10 w-24 md:w-30 lg:w-36">
        <Image
          src="https://i.ibb.co/WtbFpmR/logo.png"
          alt="HatMart Logo"
          className="object-cover w-full"
          height={400}
          width={600}
        />
      </Link>
    </div>
  );
};

export default Nav;
