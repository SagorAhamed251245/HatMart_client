import React from "react";
import { useForm } from "react-hook-form";

const BkashForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Here you can handle form submission and API calls
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mb-2 gap-x-3">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="phone">Phone Number</label>
            <input
              className="border shadow-md"
              type="tel"
              id="phone"
              name="phone"
              {...register("phone", { required: true })}
            />
            {errors.phone && <span>This field is required</span>}
          </div>

          <div className="flex flex-col w-[50%]">
            <label htmlFor="amount">Amount</label>
            <input
              className="border shadow-md"
              type="number"
              id="amount"
              name="amount"
              {...register("amount", { required: true })}
            />
            {errors.amount && <span>This field is required</span>}
          </div>
        </div>

        <div className="flex mb-2 gap-x-3">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="reference">Reference Number:</label>
            <input
              className="border shadow-md"
              type="text"
              id="reference"
              name="reference"
              {...register("reference")}
            />
          </div>

          <div className="flex flex-col w-[50%]">
            <label htmlFor="pin">PIN:</label>
            <input
              className="border shadow-md"
              type="password"
              id="pin"
              name="pin"
              {...register("pin", { required: true })}
            />
            {errors.pin && <span>This field is required</span>}
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#FF7B13] hover:bg-[#34B701] w-[30%] mt-4 text-white md:text-base text-sm px-[10px] md:px-2 font-medium py-1 rounded disabled:opacity-60"
        >
          Pay with bkash
        </button>
      </form>
    </div>
  );
};

export default BkashForm;
