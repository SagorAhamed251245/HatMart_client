import brandImage1 from "@/assets/images/brand1.png";
import brandImage2 from "@/assets/images/brand2.png";
import brandImage3 from "@/assets/images/brand3.png";
import brandImage4 from "@/assets/images/brand4.png";
import Image from "next/image";

const BrandAdd = () => {
  const brandImage = [brandImage1, brandImage2, brandImage3, brandImage4];
  return (
    <>
      <section className="flex flex-warp w-[90%] mx-auto gap-5  justify-evenly ">
        {brandImage.map((item, index) => (
          <div
            key={index}
            className="w-[25%] border h-32 flex justify-center items-center rounded-xl shadow-lg"
          >
            <div className="bg-white h-24 w-24  flex">
              <Image
                src={item}
                layout="fit"
                objectFit="cover"
                alt={brandImage1}
              ></Image>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default BrandAdd;
