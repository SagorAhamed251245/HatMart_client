"use client";
import { useForm } from "react-hook-form";
import PriceAndBrand from "./PriceAndBrand";
import AddProductInfoFrom from "./AddProductInfoFrom";

const AddProductForm = ({ProductCategory, subCategory}) => {
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
        <div className="lg:flex w-full gap-5">
          {/* left site from */}
          <div className="lg:w-[70%] ">
            <AddProductInfoFrom></AddProductInfoFrom>
          </div>
          {/* left site from */}
          {/* right side from */}
          <div className="lg:w-[30%] ">
            <PriceAndBrand ProductCategory={ProductCategory} subCategory={subCategory}></PriceAndBrand>
          </div>

          {/* right side from */}
        </div>
        <div className="w-[80%] mx-auto sticky bottom-5  h-20 bg-[#34B701] rounded-lg ">
          <div className="flex h-full p-3 justify-between items-center ">
            <p className="text-white font-bold">Add your Product </p>
            <input
              type="submit"
              className="text-[#FF7B13] font-medium bg-orange-100  px-3 py-2 rounded-md hover:bg-orange-200"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProductForm;
