import React from "react";
import { useForm } from "react-hook-form";

const CreditForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Here you can handle form submission and payment processing
  };

  return (
    <div className="justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 mb-3">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              className="border shadow-md"
              type="text"
              id="cardNumber"
              name="cardNumber"
              {...register("cardNumber", { required: true })}
            />
            {errors.cardNumber && <span>This field is required</span>}
          </div>

          <div className="flex flex-col w-[50%]">
            <label htmlFor="expiry">Expiry Date</label>
            <input
              className="border shadow-md"
              type="date"
              id="expiry"
              name="expiry"
              {...register("expiry", { required: true })}
            />
            {errors.expiry && <span>This field is required</span>}
          </div>
        </div>

        <div className="flex gap-3 mb-3">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="cardholderName">Cardholder Name</label>
            <input
              className="border shadow-md"
              type="text"
              id="cardholderName"
              name="cardholderName"
              {...register("cardholderName", { required: true })}
            />
            {errors.cardholderName && <span>This field is required</span>}
          </div>

          <div className="flex flex-col w-[50%]">
            <label htmlFor="cvv">CVV/CVC</label>
            <input
              className="border shadow-md"
              type="text"
              id="cvv"
              name="cvv"
              {...register("cvv", { required: true })}
            />
            {errors.cvv && <span>This field is required</span>}
          </div>
        </div>

        <div className="flex flex-col w-[50%]">
          <label htmlFor="postalCode">Billing Postal Code</label>
          <input
            className="border shadow-md"
            type="text"
            id="postalCode"
            name="postalCode"
            {...register("postalCode", { required: true })}
          />
          {errors.postalCode && <span>This field is required</span>}
        </div>

        <button
          type="submit"
          className="bg-[#FF7B13] hover:bg-[#34B701] w-[30%] mt-4 text-white md:text-base text-sm px-[10px] md:px-2 font-medium py-1 rounded disabled:opacity-60"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CreditForm;
