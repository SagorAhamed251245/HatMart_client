import Image from "next/image";

const PromiseItem = ({ icon, text, sentence }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-gray-200 rounded-full p-4">
        <Image src={icon} width={100} height={80}></Image>
      </div>
      <h3 className="text-lg font-semibold mt-2">{text}</h3>
      <p className="text-sm">{sentence}</p>
    </div>
  );
};

export default PromiseItem;
