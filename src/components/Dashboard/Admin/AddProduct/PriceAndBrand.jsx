import { useForm } from "react-hook-form";

const PriceAndBrand = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          {...register("price", { required: true })}
        />
        {errors.price && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="discount_percent">Discount Percent:</label>
        <input
          type="discount_percent"
          id="discount_percent"
          {...register("discount_percent", { required: true })}
        />
        {errors.category && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          {...register("category", { required: true })}
        />
        {errors.category && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="sub_category">Sub Category:</label>
        <input
          type="text"
          id="sub_category"
          {...register("sub_category", { required: true })}
        />
        {errors.category && <span>This field is required</span>}
      </div>
    </>
  );
};

export default PriceAndBrand;
