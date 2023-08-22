import { useForm } from "react-hook-form";

const AddProductInfoFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      {/* Product information */}
      <div className="border rounded-xl w-full p-5 mb-5">
        <h3>Product information</h3>
        <hr />
        <div>
          <label className="block" htmlFor="title">
            Title:
          </label>
          <input
            className="border-black border rounded w-full p-2"
            type="text"
            id="title"
            {...register("title", { required: true })}
          />
          {errors.title && <span>This field is required</span>}
        </div>

        <div>
          <label className="block" htmlFor="description">
            Description:
          </label>
          <textarea
            className="border-black border rounded w-full p-2 h-96"
            id="description"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && <span>This field is required</span>}
        </div>

        <div>
          <label className="block" htmlFor="packagingDelivery ">
            Packaging & Delivery:
          </label>
          <textarea
            className="border-black border rounded w-full p-2 "
            id="packagingDelivery"
            {...register("packagingDelivery", { required: true })}
          ></textarea>
          {errors.packagingDelivery && <span>This field is required</span>}
        </div>

        <div>
          <label className="block" htmlFor="warnings">
            Warnings:
          </label>
          <textarea
            className="border-black border rounded w-full p-2 "
            id="warnings"
            {...register("warnings", { required: true })}
          ></textarea>
          {errors.warnings && <span>This field is required</span>}
        </div>
      </div>
      {/* Media information*/}
      <div className="border rounded-xl w-full p-5 mb-5">
        <div>
          <label className="block" htmlFor="image">
            Main Image:
          </label>
          <input
            className="border-black border rounded w-full p-2"
            type="text"
            id="image"
            {...register("image", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>

        <div className="max-w-xl">
          <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="font-medium text-gray-600">
                Drop files to Attach, or
                <span className="text-blue-600 underline">browse</span>
              </span>
            </span>
            <input
              type="file"
              id="image"
              {...register("image", { required: true })}
              className="hidden"
            />
          </label>
        </div>

        <div>
          <label className="block" htmlFor="images">
            Additional Image URLs:
          </label>
          <input
            className="border-black border rounded w-full p-2"
            type="text"
            id="images"
            {...register("images", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>
      </div>
      {/* Stock information */}
      <div className="border rounded-xl w-full p-5 mb-5">
        <div>
          <label className="block" htmlFor="stock">
            Stock:
          </label>
          <input
            className="border-black border rounded w-full p-2"
            type="stock"
            id="stock"
            {...register("stock", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>

        <div>
          <label className="block" htmlFor="unit">
            Unit:
          </label>
          <input
            className="border-black border rounded w-full p-2"
            type="unit"
            id="unit"
            {...register("unit", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>
      </div>
    </>
  );
};

export default AddProductInfoFrom;
