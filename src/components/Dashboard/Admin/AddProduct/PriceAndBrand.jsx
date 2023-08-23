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
        <h3>Pricing</h3>
        <hr  className="text-[#FF7B13]"/>
        <div>
          <label className="block text-[#34B701] mb-1 mt-3 font-bold" htmlFor="price">
            Price:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="number"
            id="price"
            {...register("price", { required: true })}
          />
          {errors.price && <span>This field is required</span>}
        </div>

        <div>
          <label className="block text-[#34B701] mb-1 mt-3 font-bold" htmlFor="discount_percent">
            Discount Percent:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="discount_percent"
            id="discount_percent"
            {...register("discount_percent", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>

        {/* Stock information */}
        <div>
          <label className="block text-[#34B701] mb-1 mt-3 font-bold" htmlFor="unit">
            Unit:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="unit"
            id="unit"
            placeholder="kg"
            {...register("unit", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>

        <div>
          <label className="block text-[#34B701] mb-1 mt-3 font-bold" htmlFor="stock">
            Stock:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="number"
            placeholder="0"
            id="stock"
            {...register("stock", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>
      </div>

      {/* Organization*/}
      <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
        <h3> Organization</h3>
        <hr />
        <div>
          <label className="block text-[#34B701] mb-1 mt-3 font-bold" htmlFor="brand">
            brand:
          </label>
          <input
            placeholder="Product brand name"
            className="border-black border rounded w-full p-2 shadow-md"
            type="text"
            id="brand"
            {...register("brand", { required: true })}
          />
          {errors.brand && <span>This field is required</span>}
        </div>
        <div>
          <label className="block text-[#34B701] mb-1 mt-3 font-bold" htmlFor="category">
            Category:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="text"
            id="category"
            {...register("category", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>

        <div>
          <label className="block text-[#34B701] mb-1 mt-3 font-bold" htmlFor="sub_category">
            Sub Category:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="text"
            id="sub_category"
            {...register("sub_category", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>
      </div>
    </>
  );
};

export default PriceAndBrand;
