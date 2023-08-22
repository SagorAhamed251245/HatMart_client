import { useForm } from "react-hook-form";

const AddProductInfoFrom = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="packagingDelivery">Packaging & Delivery:</label>
        <textarea
          id="packagingDelivery"
          {...register("packagingDelivery", { required: true })}
        ></textarea>
        {errors.packagingDelivery && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="image">Main Image:</label>
        <input
          type="text"
          id="image"
          {...register("image", { required: true })}
        />
        {errors.category && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="images">Additional Image URLs:</label>
        <input
          type="text"
          id="images"
          {...register("images", { required: true })}
        />
        {errors.category && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="images">Stock:</label>
        <input
          type="stock"
          id="stock"
          {...register("stock", { required: true })}
        />
        {errors.category && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="unit">Unit:</label>
        <input
          type="unit"
          id="unit"
          {...register("unit", { required: true })}
        />
        {errors.category && <span>This field is required</span>}
      </div>
    </>
  );
};

export default AddProductInfoFrom;
