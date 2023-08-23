import { useForm } from "react-hook-form";

const PriceAndBrand = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      {/* pricing */}
      <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
        <h3 className="text-[#34B701] mb-1 mt-3 font-bold">Pricing</h3>
        <hr className="border-t border-[#FF7B13]" />
        <div>
          <label
            className="block text-[#34B701] mb-1 mt-3 font-bold"
            htmlFor="price"
          >
            Price:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="number"
            id="price"
            placeholder="0"
            {...register("price", { required: true })}
          />
          {errors.price && <span>This field is required</span>}
        </div>

        <div>
          <label
            className="block text-[#34B701] mb-1 mt-3 font-bold"
            htmlFor="discount_percent"
          >
            Discount Percent:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
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
            className="block text-[#34B701] mb-1 mt-3 font-bold"
            htmlFor="unit"
          >
            Unit:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="unit"
            id="unit"
            placeholder="g; kg; quantity "
            {...register("unit", { required: true })}
          />
          {errors.unit && <span>This field is required</span>}
        </div>

        <div>
          <label
            className="block text-[#34B701] mb-1 mt-3 font-bold"
            htmlFor="stock"
          >
            Stock:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
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
        <h3 className="text-[#34B701] mb-1 mt-3 font-bold"> Organization</h3>
        <hr className="border-t border-[#FF7B13]" />
        <div>
          <label
            className="block text-[#34B701] mb-1 mt-3 font-bold"
            htmlFor="brand"
          >
            brand:
          </label>
          <input
            placeholder="Product brand name"
            className="border-black border rounded w-full p-2 shadow-md"
            type="text"
            id="brand"
            {...register("brand")}
          />
          {errors.brand && <span>This field is required</span>}
        </div>
        <div>
          <label
            className="block text-[#34B701] mb-1 mt-3 font-bold"
            htmlFor="category"
          >
            Category:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="text"
            id="category"
            placeholder="Select Product Category"
            {...register("category", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>

        <div>
          <label
            className="block text-[#34B701] mb-1 mt-3 font-bold"
            htmlFor="sub_category"
          >
            Sub Category:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="text"
            id="sub_category"
            placeholder="Select Product Sub Category"
            {...register("sub_category", { required: true })}
          />
          {errors.sub_category && <span>This field is required</span>}
        </div>
      </div>
    </>
  );
};

export default PriceAndBrand;
