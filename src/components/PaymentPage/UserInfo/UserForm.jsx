import React from "react";
import { useForm } from "react-hook-form";

const UserForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
    closeModal(); // Close the modal after form submission
  };

  return (
    <div>
      <h2>Edit User Information</h2>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 mb-3">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="fullName">Full Name</label>
            <input
              className="border shadow-md"
              type="text"
              id="fullName"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && <span>This field is required</span>}
          </div>

          <div className="flex flex-col w-[50%]">
            <label htmlFor="address">Address</label>
            <input
              className="border shadow-md"
              id="address"
              {...register("address", { required: true })}
            />
            {errors.address && <span>This field is required</span>}
          </div>
        </div>

        <div className="flex gap-3 mb-3">
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

          <div className="flex flex-col w-[50%]">
            <label htmlFor="landmark">Landmark (optional)</label>
            <input
              className="border shadow-md"
              type="text"
              id="landmark"
              {...register("landmark")}
            />
          </div>
        </div>

        <div className="flex gap-3 mb-3">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="province">Province</label>
            <input
              className="border shadow-md"
              type="tel"
              id="province"
              {...register("province", { required: true })}
            />
            {errors.province && <span>This field is required</span>}
          </div>
          <div className="flex flex-col w-[50%]">
            <label htmlFor="city">City</label>
            <input
              className="border shadow-md"
              type="text"
              id="city"
              {...register("city", { required: true })}
            />
            {errors.city && <span>This field is required</span>}
          </div>
          {/* 
          <div className="flex flex-col w-[50%]">
            <label htmlFor="landmark">Landmark (optional)</label>
            <input
              className="border shadow-md"
              type="text"
              id="landmark"
              {...register("landmark")}
            />
          </div> */}
        </div>

        <div className="flex">
          <button
            type="submit"
            className="bg-[#FF7B13] hover:bg-[#34B701] text-white py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
