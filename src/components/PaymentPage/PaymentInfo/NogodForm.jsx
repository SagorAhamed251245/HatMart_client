import React from "react";
import { useForm } from "react-hook-form";
import NagadModal from "../Modal/NagadModal";

const NogodForm = ({ onConfirm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    onConfirm(); // Call the onConfirm callback
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label htmlFor="confirmation">
            Please confirm that you will pay in cash upon delivery:
          </label>
          <select
            id="confirmation"
            name="confirmation"
            {...register("confirmation", { required: true })}
          >
            <option value="">Select an option</option>
            <option value="yes">Yes, I will pay in cash</option>
            <option value="no">No, I want to change the payment method</option>
          </select>
          {errors.confirmation && <span>This field is required</span>}
        </div>

        <button
          type="submit"
          className="bg-[#FF7B13] hover:bg-[#34B701] w-[50%] text-white md:text-base text-sm px-[10px] md:px-4 font-medium py-1 rounded disabled:opacity-60 "
        >
          Confirm Cash Payment
        </button>
      </form>
      <NagadModal />
    </div>
  );
};

export default NogodForm;
