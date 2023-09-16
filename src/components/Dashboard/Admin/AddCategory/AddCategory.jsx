"use client";
import { useForm } from "react-hook-form";
import DropSvg from "../AddProduct/DropSvg";
import { useState } from "react";

import SubCategoryView from "./SubCategoryView";
import Image from "next/image";
import addCategory from "@/utils/addCategory";

const AddCategory = () => {
  const [subCategory, setSubCategory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // handle submit form data
  const onSubmit = async (data) => {
    const categoryData = {
      category: data.title,
      icon: data.image,
      sub_category: subCategory,
    };

    await addCategory(categoryData);
    reset();
  };

  // upload image using ibb
  const uploadImage = async (event) => {
    const formData = new FormData();
    if (!event.target.files[0]) return;

    formData.append("image", event.target.files[0]);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=f52e595071a0957951aba70405bfbaf8`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Failed to upload image");

      const data = await res.json();

      setValue("image", data.data.url); // set up the value for form data name "image"
      setCategoryImage(data.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  //  add multiple category data
  const handleSubCategoryBlur = (event) => {
    const inputValue = event.target.value.trim();
    if (inputValue !== "") {
      setInputValue(inputValue);
      setSubCategory([...subCategory, inputValue]);
      event.target.value = "";
    }
  };

  return (
    <div className="">
      {" "}
      <div className="border  rounded-xl w-full p-5 mb-5 shadow-xl dark:border-gray-500">
        <h3 className="text-2xl font-bold mb-5">Add Category</h3>
        <hr className="dark:border-gray-500" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block text-[#FF7B13] mb-1 mt-3 font-bold  "
              htmlFor="title"
            >
              Category Title:
            </label>
            <input
              className=" border dark:border-gray-600 rounded w-full outline-none p-2 shadow-md focus:shadow-yellow-200 focus:shadow-md "
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
            <label className="shadow-md flex  h-28 w-64 px-4 transition bg-white dark:bg-Dark border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              {!categoryImage ? (
                <span className="flex items-center space-x-2 dark:text-gray-300">
                  <DropSvg />
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    Drop image to Attach, or
                    <span className="text-blue-600 underline ml-1">browse</span>
                  </span>
                </span>
              ) : (
                <>
                  <div className="flex relative overflow-hidden">
                    <Image
                      src={categoryImage}
                      className="object-cover"
                      width={256}
                      height={112}
                      alt="Category Image"
                    ></Image>
                  </div>
                </>
              )}
              <input
                type="file"
                id="image"
                required
                onChange={uploadImage}
                className="hidden "
              />
            </label>
          </div>

          <div>
            <label
              className="block text-[#FF7B13] mb-1 mt-3 font-bold "
              htmlFor="subCategory "
            >
              Sub category{" "}
              <small className="opacity-70">(You can add multiple)</small>:
            </label>
            <input
              className=" border dark:border-gray-600 rounded outline-none w-full p-2 shadow-md  focus:shadow-yellow-200 focus:shadow-md"
              type="text"
              id="title"
              placeholder="Enter sub category"
              defaultValue={inputValue}
              // onBlur={handleSubCategoryBlur}
              {...register("subCategory", {
                required: subCategory.length === 0 && true,
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
            />

            {errors.subCategory && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mt-5 text-center">
            <button
              type="submit"
              className="bg-[#ff6347cc]  text-white md:text-lg text-sm px-[10px] md:px-4 font-medium py-1.5  rounded disabled:opacity-60 hover:bg-[#FF7B13]"
            >
              Save Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
