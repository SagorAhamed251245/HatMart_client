'use client'
import { useForm } from "react-hook-form";

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <form className="space-y-4 mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="email"
          className="block  text-md font-medium text-gray-700"
        >
          Mobile phone number or email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Name"
          className={`mt-1 p-2  focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full   shadow-lg rounded-md ${
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
          type="password"
          id="password"
          name="password"
          placeholder="password"
          className={`mt-1 p-2  focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full   shadow-lg rounded-md ${
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
      <button
        type="submit"
        className="w-full py-2 btn bg-[#FFD814] hover:bg-[#e6cc0b] text-black hover rounded-md transition duration-300"
      >
        Log In
      </button>
    </form>
  );
};

export default EmailForm;
