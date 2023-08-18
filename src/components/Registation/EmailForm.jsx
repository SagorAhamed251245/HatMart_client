"use client";
import { useForm } from "react-hook-form";

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle the form data here
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="name"
          className="block text-md font-medium text-gray-700"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className={`mt-1 p-2 focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md ${
            errors?.name ? "border-red-500" : ""
          }`}
          {...register("name", { required: "Name is required" })}
        />
        {errors?.name && (
          <span className="text-red-500">{errors?.name?.message}</span>
        )}
      </div>
      <div>
        <label
          htmlFor="photo"
          className="block text-md font-medium text-gray-700"
        >
          Profile Photo
        </label>
        <input
          type="text"
          id="photo"
          name="photo"
          placeholder="Photo Url"
          className={`mt-1 p-2 focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md ${
            errors?.photo ? "border-red-500" : ""
          }`}
          {...register("photo", { required: "Profile Photo is required" })}
        />
        {errors?.photo && (
          <span className="text-red-500">{errors?.photo?.message}</span>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-md font-medium text-gray-700"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          className={`mt-1 p-2 focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md ${
            errors?.email ? "border-red-500" : ""
          }`}
          {...register("email", { required: "Email is required" })}
        />
        {errors?.email && (
          <span className="text-red-500">{errors?.email?.message}</span>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Your password
        </label>
        <input
          type={"password"}
          id="password"
          name="password"
          placeholder="Your password"
          className={`mt-1 p-2 focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md ${
            errors?.password ? "border-red-500" : ""
          }`}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
              message:
                "Password must contain at least one capital letter and one special character (!@#$%^&*)",
            },
          })}
          autoComplete="on"
        />
        {errors?.password && (
          <span className="text-red-500">{errors?.password?.message}</span>
        )}
      </div>
      <div>
        <label
          htmlFor="confirm_password"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm password
        </label>
        <input
          type={"password"}
          id="confirm_password"
          name="confirm_password"
          placeholder="Confirm password"
          className={`mt-1 p-2 focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md ${
            errors?.confirm_password ? "border-red-500" : ""
          }`}
          {...register("confirm_password", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          autoComplete="on"
        />
        {errors?.confirm_password && (
          <span className="text-red-500">
            {errors?.confirm_password?.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="w-full py-2 btn bg-[#FFD814] hover:bg-[#e6cc0b] text-black hover rounded-md transition duration-300"
      >
        Registration
      </button>
    </form>
  );
};

export default EmailForm;
