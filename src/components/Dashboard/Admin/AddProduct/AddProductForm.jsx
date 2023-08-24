"use client";
import { useForm } from "react-hook-form";
import PriceAndBrand from "./PriceAndBrand";
import AddProductInfoFrom from "./AddProductInfoFrom";
import DropSvg from "./DropSvg";

const AddProductForm = ({ ProductCategory, subCategory }) => {
  return (
    <>
      <form>
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
                  name="title"
                />
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
                  name="description"
                ></textarea>
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
                  name="packagingDelivery"
                ></textarea>
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
                  name="warnings"
                ></textarea>
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
                      name="image"
                      className="hidden "
                    />
                  </label>
                </div>

                {/* Additional :*/}
                <div className="md:w-[40%]">
                  <label className="block text-black mb-1 mt-3 font-semibold ">
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
                      name="images"
                      className="hidden "
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
              <h3 className="text-black mb-1 mt-3 font-semibold">
                Pricing & Stock
              </h3>
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
                  name="price"
                />
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
                  name="discount_percent"
                />
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
                  name="unit"
                />
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
                  name="stock"
                />
              </div>
            </div>

            {/* Organization*/}
            <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
              <h3 className="text-black mb-1 mt-3 font-semibold">
                {" "}
                Organization
              </h3>
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
                  name="brand"
                />
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
                  name="category"
                >
                  {ProductCategory.map(({ category, _id }) => (
                    <option
                      key={_id}
                      value={category}
                      defaultValue={category[0]}
                    >
                      {category}
                    </option>
                  ))}
                </select>
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
                  name="sub_category"
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
              </div>
            </div>
          </div>

          {/* right side from */}
        </div>
        <div className="w-[80%] mx-auto sticky bottom-5 mt-5 border h-20 bg-white shadow-xl rounded-lg ">
          <div className="flex h-full p-3 justify-between items-center ">
            <p className="text-black font-bold">Add your Product </p>
            <input
              className="text-[black] hover:bg-orange-300 font-medium  px-3 py-2 rounded-md bg-[#FF7B13]"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default AddProductForm;
