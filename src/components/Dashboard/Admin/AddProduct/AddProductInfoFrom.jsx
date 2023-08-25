import { useForm } from "react-hook-form";
import DropSvg from "./DropSvg";

const AddProductInfoFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      {/* Product information */}
      <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
        <h3 className="text-black mb-1 mt-3 font-semibold">
          Product information
        </h3>
        <hr className="border-t border-[#FF7B13]" />
        <div>
          <label
            className="block text-black mb-1 mt-3 font-semibold  "
            htmlFor="title"
          >
            Title:
          </label>
          <input
            className=" border rounded w-full p-2 shadow-md "
            type="text"
            id="title"
            placeholder="Product Name"
            {...register("title", { required: true })}
          />
          {errors.title && <span>This field is required</span>}
        </div>

        <div>
          <label
            className="block text-black mb-1 mt-3 font-semibold"
            htmlFor="description"
          >
            Description:
          </label>
          <textarea
            className=" border rounded w-full p-2 h-36 shadow-md"
            id="description"
            placeholder="write Product Description"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && <span>This field is required</span>}
        </div>

        <div>
          <label
            className="block text-black mb-1 mt-3 font-semibold "
            htmlFor="packagingDelivery "
          >
            Packaging & Delivery:
          </label>
          <textarea
            className=" border rounded w-full p-2  shadow-md"
            id="packagingDelivery"
            placeholder="Write About Product Packaging & Delivery"
            {...register("packagingDelivery", { required: true })}
          ></textarea>
          {errors.packagingDelivery && <span>This field is required</span>}
        </div>

        <div>
          <label
            className="block text-black mb-1 mt-3 font-semibold"
            htmlFor="warnings"
          >
            Warnings:
          </label>
          <textarea
            className=" border rounded w-full p-2  shadow-md"
            id="warnings"
            placeholder="Write About Product  Warnings"
            {...register("warnings", { required: true })}
          ></textarea>
          {errors.warnings && <span>This field is required</span>}
        </div>
      </div>
      {/* Media information*/}
      <div className="border rounded-xl w-full p-5 mb-5 shadow-xl  ">
        {/* Additional :*/}
        <h3 className="text-black mb-1 mt-3 font-semibold">Media</h3>
        <hr className="border-t border-[#FF7B13]" />
        <div className="md:flex gap-5">
          <div className="md:w-[60%] ">
            <label
              className="block text-black mb-1 mt-3 font-semibold "
              htmlFor="image"
            >
              Main Image:
            </label>
            <label className="shadow-md flex justify-center w-full h-32 md:h-96 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <DropSvg />
                <span className="font-medium text-gray-600">
                  Drop files to Attach, or
                  <span className="text-blue-600 underline">browse</span>
                </span>
              </span>
              <input
                type="file"
                id="image"
                {...register("image", { required: true })}
                className="hidden "
              />
              {errors.image && <span>This field is required</span>}
            </label>
          </div>

          {/* Additional :*/}
          <div className="md:w-[40%]">
            <label
              className="block text-black mb-1 mt-3 font-semibold "
              htmlFor="images"
            >
              Additional Image URLs:
            </label>

            <label className=" shadow-md flex justify-center w-full h-32 md:h-96  px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <DropSvg />
                <span className="font-medium text-gray-600">
                  Drop files to Attach, or
                  <span className="text-blue-600 underline">browse</span>
                </span>
              </span>
              <input
                type="file"
                id="images"
                {...register("images")}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductInfoFrom;
