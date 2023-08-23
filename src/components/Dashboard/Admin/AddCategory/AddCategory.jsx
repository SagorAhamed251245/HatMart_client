"use client";
import { useForm } from "react-hook-form";

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data); // You can handle the form data submission here
  };
  return (
    <div className="max-w-2xl">
      {" "}
      <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
        <h3>Add Category</h3>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block text-[#34B701] mb-1 mt-3 font-bold  "
              htmlFor="title"
            >
              Category Title:
            </label>
            <input
              className="border-black border rounded w-full p-2 shadow-md "
              type="text"
              id="title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label
              className="block text-[#34B701] mb-1 mt-3 font-bold"
              htmlFor="image"
            >
              Choose image:
            </label>
            <input
              className="border-black border rounded w-full p-2 shadow-md   dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
              type="file"
              id="image"
              accept="image/*"
              multiple="false"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label
              className="block text-[#34B701] mb-1 mt-3 font-bold "
              htmlFor="subCategory "
            >
              Sub category:
            </label>
            <input
              className="border-black border rounded w-full p-2 shadow-md "
              type="text"
              id="title"
              {...register("subCategory", { required: true })}
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
