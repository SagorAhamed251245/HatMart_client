"use client";
import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();

  const onSubmit = async (data) => {
    
    const { email, password } = data;
    try {
      await signIn(email, password);
      startTransition(() => {
        refresh();
        replace(from);
      });
    } catch (error) {
      console.log(error);
    }
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
