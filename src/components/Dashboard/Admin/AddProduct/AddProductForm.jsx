"use client";
import { useForm } from "react-hook-form";
import PriceAndBrand from "./PriceAndBrand";
import AddProductInfoFrom from "./AddProductInfoFrom";

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle the form data submission here
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full ">
          {/* left site from */}
          <div className="w-[60%] bg-red-400">
            <AddProductInfoFrom></AddProductInfoFrom>
          </div>
          {/* left site from */}
          {/* right side from */}
          <div className="w-[40%] bg-red-400">
            <PriceAndBrand></PriceAndBrand>
          </div>

          {/* right side from */}
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddProductForm;
