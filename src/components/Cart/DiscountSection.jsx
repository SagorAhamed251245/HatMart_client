import React, { useState } from "react";

const DiscountSection = ({ setDiscountMoney, setTotalPrice, totalPrice }) => {
  const [gotDiscount, setGotDiscount] = useState(false);
  const [discountDetails, setDiscountDetails] = useState([]);

  const discountCodes = [
    {
      code: "SUMMER2023",
      discount: 0.15, // 15% discount
      description: "Summer Sale 2023",
    },
    {
      code: "FALLSALE",
      discount: 0.1, // 10% discount
      description: "Fall Sale",
    },
    {
      code: "HOLIDAYSALE",
      discount: 0.2, // 20% discount
      description: "Holiday Sale",
    },
    // Add more discount codes as needed
  ];

  const expiredDiscountCoupons = [
    {
      code: "EXPIRED10",
      discount: 0.1, // 10% discount
      description: "May Sale",
      expirationDate: "2022-12-31", // Expired on December 31, 2022
    },
    {
      code: "OLD20",
      discount: 0.2, // 20% discount
      description: "Black Friday Sale",
      expirationDate: "2021-06-30", // Expired on June 30, 2021
    },
    {
      code: "DISCOUNT50",
      discount: 0.5, // 50% discount
      description: "Eid ul adha Sale",
      expirationDate: "2023-01-15", // Expired on January 15, 2023
    },
    // Add more expired discount codes as needed
  ];

  const handleDiscount = (e) => {
    e.preventDefault();
    let code = e.target.couponCode.value;
    const matching = discountCodes.find((d) => d.code === code);
    const expired = expiredDiscountCoupons.find((d) => d.code === code);
    if (matching) {
      console.log(
        `congratulations you have got ${matching?.discount * 100}% discount`
      );
      setGotDiscount(true);
      setDiscountDetails(matching);
      setDiscountMoney(
        parseFloat((totalPrice * matching?.discount).toFixed(2))
      );
      setTotalPrice((prevTotalPrice) =>
        parseFloat(
          (prevTotalPrice - prevTotalPrice * matching?.discount).toFixed(2)
        )
      );
    } else if (expired) {
      alert(
        `Sorry the discount code you provided has already Expired Expire Date: ${expired?.expirationDate} Sale: ${expired?.description}`
      );
      e.target.couponCode.value = "";
      setGotDiscount(false);
    } else {
      alert(`Sorry the discount code you provided doesn't match`);
      e.target.couponCode.value = "";
      setGotDiscount(false);
    }
  };

  return (
    <div>
      <form
        className={gotDiscount ? `hidden` : `block`}
        onSubmit={handleDiscount}
      >
        <input
          type="text"
          name="couponCode"
          className="border-2 border-orange-400 my-6 w-full py-2 px-3 rounded-lg"
          placeholder="Enter Your Coupon Code"
        />
        <button
          type="submit"
          className="btn bg-[#34b701] text-white  hover:bg-orange-600"
        >
          Get Discount
        </button>
      </form>
      <div
        className={
          gotDiscount
            ? `flex flex-col justify-center items-center gap-3 pt-4 `
            : `hidden`
        }
      >
        <h4 className="text-orange-600 font-semibold">
          Congratulations You Have Got
        </h4>
        <span className="text-2xl font-semibold text-[#34b701]">
          {discountDetails?.discount * 100} %
        </span>
        <h4 className="text-orange-600 font-semibold">
          Discount on "{discountDetails?.description}" !!!
        </h4>
      </div>
    </div>
  );
};

export default DiscountSection;
