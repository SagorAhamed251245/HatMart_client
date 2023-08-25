"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const EmailForm = () => {
  const { createUser, profileUpdate } = useAuth();
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

  const uploadImage = async (event) => {
    console.log('hit');
    const formData = new FormData();
    if (!event.target.files[0]) return;
    formData.append("image", event.target.files[0]);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=f52e595071a0957951aba70405bfbaf8`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Failed to upload image");

      const data = await res.json();

      setValue("photo", data.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data, event) => {
    const { name, email, password, photo } = data;
    const toastId = toast.loading("Loading...");
    try {
      await createUser(email, password);

      await profileUpdate({
        displayName: name,
        photoURL: photo,
      });
      toast.success("User signed in successfully");
      startTransition(() => {
        refresh();
        replace(from);
        toast.dismiss(toastId);
        toast.success("User signed in successfully");
      });
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
      <div className="form-control">
        <label
          htmlFor="photo"
          className="block text-sm font-medium text-gray-700"
        >
          Photo
        </label>
        <input
          type="file"
          id="photo"
          onChange={uploadImage}
          className="file-input file-input-bordered   w-full"
        />
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
