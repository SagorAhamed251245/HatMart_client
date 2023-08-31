import getBannerByType from "@/utils/getBannerByType";
import Image from "next/image";
import BannerSlider from "./BannerSlider";

const HeroSection = async () => {
  const main = await getBannerByType("main");
  const side = await getBannerByType("side");
  const bottom = await getBannerByType("bottom");

  return (
    <>
      <header className="  w-full md:w-[90%] mx-auto ">
        {/* main bannner + sidebanner */}
        <section className="lg:flex lg:flex-row flex-col  gap-5  w-full">
          {/* main banner starts here */}
          <BannerSlider main={main} />
          {/* main banner ends here */}
          {/* side banner starts here */}
          <div className="mt-5 md:mt-0 relative flex lg:flex-col md:w-[30%] lg:gap-6 gap-3  flex-row">
            {side.map((banner) => (
              <div key={banner.id} className=" flex h-full  w-full rounded-lg ">
                <div className="h-full  w-full overflow-hidden ">
                  <Image
                    height={203}
                    width={407}
                    className="w-full h-24 md:h-full  object-cover rounded-xl"
                    src={banner.image}
                    alt="side banner image"
                  ></Image>
                </div>
              </div>
            ))}
          </div>
          {/* side banner ends here */}
        </section>

        {/* bottom banners starts here for website*/}
        <section className=" flex mt-5   gap-6 overflow-x-auto">
          {bottom.map((banner) => (
            <div
              key={banner._id}
              className=" h-[150px] lg:h-[250px]   w-[60%] rounded-xl overflow-hidden"
            >
              <Image
                src={banner.image}
                height={300}
                width={500}
                className="w-full h-24 md:h-full  object-cover rounded-xl"
                alt="Middle Add"
              ></Image>
            </div>
          ))}
        </section>
        {/* bottom banner ends here for website*/}
        {/* bottom banner starts here for mobile*/}
      </header>
    </>
  );
};

export default HeroSection;
