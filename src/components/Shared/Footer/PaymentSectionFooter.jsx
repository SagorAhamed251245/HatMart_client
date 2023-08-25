import Image from "next/image";
const PaymentSectionFooter = () => {
  return (
    <>
      <section className="flex flex-col lg:items-start items-center">
        <h4 className="text-black font-semibold">Payment</h4>
        <div className="flex w-[300px] my-3 gap-4">
          <div className="h-[40px] w-[100px] relative">
            <Image
              className="object-cover object-center rounded"
              src={"https://i.ibb.co/2yDCqkG/bkash.png"}
              alt="payment methods"
              fill
            />
          </div>
          <div className="h-[40px] w-[100px] relative">
            <Image
              className="object-cover object-center rounded"
              src={"https://i.ibb.co/xjhcMQ3/cashon-Delivery.png"}
              alt="payment methods"
              fill
            />
          </div>
        </div>
        <div className="flex w-[300px] my-3 gap-4">
          <div className="h-[30px] w-[90px] relative">
            <Image
              className="object-cover object-center rounded"
              src={"https://i.ibb.co/3C2cSWY/maestro.jpg"}
              alt="payment methods"
              fill
            />
          </div>
          <div className="h-[30px] w-[90px] relative">
            <Image
              className="object-cover object-center rounded"
              src={"https://i.ibb.co/gFykXmw/master-Card.jpg"}
              alt="payment methods"
              fill
            />
          </div>
          <div className="h-[30px] w-[90px] relative">
            <Image
              className="object-cover object-center rounded"
              src={"https://i.ibb.co/0GKgHfb/visaCard.png"}
              alt="payment methods"
              fill
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentSectionFooter;
