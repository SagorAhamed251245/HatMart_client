"use client";
import { useForm } from "react-hook-form";
import PriceAndBrand from "./PriceAndBrand";
import AddProductInfoFrom from "./AddProductInfoFrom";
import DropSvg from "./DropSvg";

const AddProductForm = ({ ProductCategory, subCategory }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.image[0].name); // You can handle the form data submission here
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex w-full gap-5">
          {/* left site from */}
          <div className="lg:w-[70%] ">
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
                {errors.packagingDelivery && (
                  <span>This field is required</span>
                )}
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
                      multiple
                      {...register("images")}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* left site from */}
          {/* right side from */}
          <div className="lg:w-[30%] ">
            {/* pricing */}
      <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
        <h3 className="text-black mb-1 mt-3 font-semibold">Pricing & Stock</h3>
        <hr className="border-t border-[#FF7B13]" />
        <div>
          <label
            className="block text-black mb-1 mt-3 font-semibold"
            htmlFor="price"
          >
            Price:
          </label>
          <input
            className=" border rounded w-full p-2 shadow-md"
            type="number"
            id="price"
            placeholder="0"
            {...register("price", { required: true })}
          />
          {errors.price && <span>This field is required</span>}
        </div>

        <div>
          <label
            className="block text-black mb-1 mt-3 font-semibold"
            htmlFor="discount_percent"
          >
            Discount Percent:
          </label>
          <input
            className=" border rounded w-full p-2 shadow-md"
            type="discount_percent"
            id="discount_percent"
            placeholder="0"
            {...register("discount_percent")}
          />
          {errors.discount_percent && <span>This field is required</span>}
        </div>

        {/* Stock information */}
        <div>
          <label
            className="block text-black mb-1 mt-3 font-semibold"
            htmlFor="unit"
          >
            Unit:
          </label>
          <input
            className=" border rounded w-full p-2 shadow-md"
            type="unit"
            id="unit"
            placeholder="g; kg; quantity "
            {...register("unit", { required: true })}
          />
          {errors.unit && <span>This field is required</span>}
        </div>

        <div>
          <label
            className="block text-black mb-1 mt-3 font-semibold"
            htmlFor="stock"
          >
            Stock:
          </label>
          <input
            className=" border rounded w-full p-2 shadow-md"
            type="number"
            placeholder="0"
            id="stock"
            {...register("stock", { required: true })}
          />
          {errors.stock && <span>This field is required</span>}
        </div>
      </div>

      {/* Organization*/}
      <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
        <h3 className="text-black mb-1 mt-3 font-semibold"> Organization</h3>
        <hr className="border-t border-[#FF7B13]" />
        <div>
          <label
            className="block text-black mb-1 mt-3 font-semibold"
            htmlFor="brand"
          >
            brand:
          </label>
          <input
            placeholder="Product brand name"
            className=" border rounded w-full p-2 shadow-md"
            type="text"
            id="brand"
            {...register("brand")}
          />
          {errors.brand && <span>This field is required</span>}
        </div>
        <div>
          <label
            className="block text-black mb-1 mt-3 font-semibold"
            htmlFor="category"
          >
            Category:
          </label>
          <select
            className=" border rounded w-full p-2 shadow-md"
            id="category"
            placeholder="Select Product Category"
            {...register("category", { required: true })}
          >
            {ProductCategory.map(({ category, _id }) => (
              <option key={_id} value={category} defaultValue={category[0]}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <span>This field is required</span>}
        </div>

        <div>
          <label
            className="block text-black mb-1 mt-3 font-semibold"
            htmlFor="sub_category"
          >
            Sub Category:
          </label>
          <select
            className=" border rounded w-full p-2 shadow-md"
            type="text"
            id="sub_category"
            placeholder="Select Product Sub Category"
            {...register("sub_category", { required: true })}
          >
            {subCategory.map((sub_category, index) => (
              <option
                key={index}
                value={sub_category}
                defaultValue={sub_category[0]}
              >
                {sub_category}
              </option>
            ))}
          </select>
          {errors.sub_category && <span>This field is required</span>}
        </div>
      </div>
          </div>

          {/* right side from */}
        </div>
        <div className="w-[80%] mx-auto sticky bottom-5 mt-5 border h-20 bg-white shadow-xl rounded-lg ">
          <div className="flex h-full p-3 justify-between items-center ">
            <p className="text-black font-bold">Add your Product </p>
            <input
              type="submit"
              className="text-[black] hover:bg-orange-300 font-medium  px-3 py-2 rounded-md bg-[#FF7B13]"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProductForm;
