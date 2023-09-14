"use client";
import useAuth from "@/hooks/useAuth";
import createJWT from "@/utils/createJWT";
import postUser from "@/utils/users/postUser";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const EmailForm = () => {
  const { createUser, profileUpdate } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();

  const onSubmit = async (data, event) => {
    const { name, email, password } = data;
    const toastId = toast.loading("Loading...");
    try {
      await createUser(email, password);
      await createJWT({ email });
      await profileUpdate({
        displayName: name,
      });

      startTransition(() => {
        refresh();
        replace(from);
        toast.dismiss(toastId);
        toast.success("User signed in successfully");
      });
      await postUser(data);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
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
      <div className="relative">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Your password
        </label>
        <input
          type={showPassword ? "text" : "password"}
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
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 bottom-2.5 cursor-pointer opacity-60"
        >
          {showPassword ? (
            <FaEye size={20} title="hide password" />
          ) : (
            <FaEyeSlash size={22} title="show password" />
          )}
        </div>

        {errors?.password && (
          <span className="text-red-500">{errors?.password?.message}</span>
        )}
      </div>
      <div className="relative">
        <label
          htmlFor="confirm_password"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm password
        </label>
        <input
          type={showConPassword ? "text" : "password"}
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
        <div
          onClick={() => setShowConPassword(!showConPassword)}
          className="absolute right-4 bottom-2.5 cursor-pointer opacity-60"
        >
          {showConPassword ? (
            <FaEye size={20} title="hide password" />
          ) : (
            <FaEyeSlash size={22} title="show password" />
          )}
        </div>
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
