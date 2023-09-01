import Image from "next/image";
import Link from "next/link";

const MiddleAdd = () => {
  return (
    <section className="w-[90%] mx-auto">
      <section className="  h-[150px] lg:h-[300px] mb-5 bg-red-300 relative rounded-xl overflow-hidden">
        <Image
          src="https://i.ibb.co/P1F7nSx/Grocery-Shoping-1.png"
          className="object-cover w-full"
          height={400}
          width={1080}
          alt="Middle Add"
        ></Image>
      </section>
      <section className="flex gap-5 mb-5">
        <div className=" h-[150px] lg:h-[300px] w-[60%]  rounded-xl overflow-hidden">
          <Image
            src="https://i.ibb.co/jrpz7cr/advantages-to.webp"
            className="object-cover w-full"
            height={400}
            width={600}
            alt="Middle Add"
          ></Image>
        </div>

        <div className="bg-green-300 h-[150px] lg:h-[300px] w-[40%] relative rounded-xl overflow-hidden">
          <Image
            src="https://i.ibb.co/rv8MkLv/addaas.jpg"
            className="object-cover w-full"
            height={400}
            width={600}
            alt="Middle Add"
          ></Image>
        </div>
      </section>
    </section>
  );
};

export default MiddleAdd;
