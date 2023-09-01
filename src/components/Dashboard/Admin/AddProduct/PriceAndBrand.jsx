import { useForm } from "react-hook-form";

const PriceAndBrand = ({ ProductCategory, subCategory }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
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
    </>
  );
};

export default PriceAndBrand;
