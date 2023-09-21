import React from "react";
import { useForm } from "react-hook-form";

const CodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Here you can handle form submission and order confirmation logic
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 mb-3">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="name">Name</label>
            <input
              className="border shadow-md"
              type="text"
              id="name"
              name="name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="flex flex-col w-[50%]">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              className="border shadow-md"
              type="tel"
              id="mobileNumber"
              {...register("mobileNumber", { required: true })}
            />
            {errors.mobileNumber && <span>This field is required</span>}
          </div>
        </div>

        <div className="flex gap-3 mb-3">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="address">Address</label>
            <textarea
              className="border shadow-md"
              id="address"
              name="address"
              {...register("address", { required: true })}
              rows="4"
              // Add this class to adjust the margin
            />
            {errors.address && <span>This field is required</span>}
          </div>

          <div className="flex flex-col w-[50%]">
            <label htmlFor="notes">Additional Notes</label>
            <textarea
              className="border shadow-md"
              id="notes"
              name="notes"
              {...register("notes")}
              rows="4"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#FF7B13] hover:bg-[#34B701]  mt-4 text-white md:text-base text-sm px-[10px] md:px-2 font-medium py-1 rounded disabled:opacity-60"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CodForm;
