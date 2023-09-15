import logo from "@/assets/icons/hatmartLogo.svg";
import Image from "next/image";

const Loading = () => {
  return (
    <>
      <div className=" flex items-center h-screen justify-center animate-bounce">
        <Image src={logo} width={100} height={100} alt="logo" srcSet="" />
        <div className="text-[#FF6E14] font-bold text-xl">loading...</div>
      </div>
    </>
  );
};

export default Loading;
