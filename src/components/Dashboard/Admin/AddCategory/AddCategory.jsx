"use client";
import { useForm } from "react-hook-form";
import DropSvg from "../AddProduct/DropSvg";
import { useState } from "react";

import SubCategoryView from "./SubCategoryView";

const AddCategory = () => {
  const [subCategory, setSubCategory] = useState([]);
  const [inputValue, setInputValue] = useState("");

  console.log(subCategory);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const categoryData = {
      category: data.category,
      image: data.image,
      subCategories: subCategory,
    };
    console.log(categoryData); // You can handle the form data submission here
  };

  const handleSubCategoryBlur = (event) => {
    const inputValue = event.target.value.trim();
    if (inputValue !== "") {
      setInputValue(inputValue);
      setSubCategory([...subCategory, inputValue]);
      event.target.value = "";
    }
  };

  // Edit subCategory input field data
  const handleSubCategoryEdit = () => {};
  // delete subCategory data
  const handleSubCategoryDelete = (index) => {
    setSubCategory(subCategory.filter((i) => i !== index));
  };

  return (
    <div className="">
      {" "}
      <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
        <h3 className="text-2xl font-bold mb-5">Add Category</h3>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block text-[#FF7B13] mb-1 mt-3 font-bold  "
              htmlFor="title"
            >
              Category Title:
            </label>
            <input
              className=" border rounded w-full outline-none p-2 shadow-md focus:shadow-yellow-200 focus:shadow-md "
              type="text"
              id="title"
              placeholder="Enter title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className=" ">
            <label
              className="block text-[#FF7B13] mb-1 mt-3 font-bold "
              htmlFor="image"
            >
              Choose Image:
            </label>
            <label className="shadow-md flex  h-28 w-64 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <DropSvg />
                <span className="font-medium text-gray-600">
                  Drop image to Attach, or
                  <span className="text-blue-600 underline ml-1">browse</span>
                </span>
              </span>
              <input
                type="file"
                id="image"
                accept="image/*"
                {...register("image", { required: true })}
                className="hidden "
              />
            </label>
            {errors.image && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label
              className="block text-[#FF7B13] mb-1 mt-3 font-bold "
              htmlFor="subCategory "
            >
              Sub category:
            </label>
            <input
              className=" border rounded outline-none w-full p-2 shadow-md  focus:shadow-yellow-200 focus:shadow-md"
              type="text"
              id="title"
              placeholder="Enter sub category"
              defaultValue={inputValue}
              // onBlur={handleSubCategoryBlur}
              {...register("subCategory", {
                required: true,
                onBlur: (e) => {
                  // Call your custom logic function
                  handleSubCategoryBlur(e);

                  // Let React Hook Form handle its onBlur validation
                  e.target.blur();
                },
              })}
            />
            {/* Show sub Category */}
            <SubCategoryView
              subCategory={subCategory}
              setSubCategory={setSubCategory}
              handleSubCategoryEdit={handleSubCategoryEdit}
              handleSubCategoryDelete={handleSubCategoryDelete}
            />

            {errors.subCategory && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mt-5 text-center">
            <button className="bg-[#ff6347cc]  text-white md:text-lg text-sm px-[10px] md:px-4 font-medium py-1.5  rounded disabled:opacity-60 hover:bg-[#FF7B13]">
              Save Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
