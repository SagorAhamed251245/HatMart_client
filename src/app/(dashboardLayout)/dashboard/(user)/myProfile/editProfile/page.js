"use client";
import getUserData from "@/data/getUserData";
import useAuth from "@/hooks/useAuth";
import editUser from "@/utils/editUser";
import postUser from "@/utils/users/postUser";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const EditProfilePage = () => {
  const { profileUpdate } = useAuth();
  const user = getUserData();
  console.log(user);
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

      setValue("image", data.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data, event) => {
    let { name, email, mobileNumber, address, gender, dateOfBirth, image } =
      data;
    console.log(data);
    const NewMobileNumber = parseFloat(mobileNumber);

    const updatedItem = {
      name,
      mobileNumber: NewMobileNumber,
      address,
      gender,
      dateOfBirth,
      image,
    };
    const toastId = toast.loading("Loading...");
    try {
      await profileUpdate({
        displayName: name,
        photoURL: image,
      });
      toast.success("User Profile Update in successfully");
      startTransition(() => {
        refresh();
        replace(from);
        toast.dismiss(toastId);
        toast.success("User Profile Update in successfully");
      });
      await editUser(user?._id, updatedItem);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };

  return (
    <form
      className="space-y-4 lg:w-1/2 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
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
          htmlFor="mobileNumber"
          className="block text-md font-medium text-gray-700"
        >
          Your mobile Number
        </label>
        <input
          type="number"
          id="mobileNumber"
          name="mobileNumber"
          placeholder="Your Mobile Number"
          className={`mt-1 p-2 focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md ${
            errors?.mobileNumber ? "border-red-500" : ""
          }`}
          {...register("mobileNumber")}
        />
        {errors?.mobileNumber && (
          <span className="text-red-500">{errors?.mobileNumber?.message}</span>
        )}
      </div>
      {/*  */}

      <div>
        <label
          htmlFor="address"
          className="block text-md font-medium text-gray-700"
        >
          Your address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Your address"
          className={`mt-1 p-2 focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md ${
            errors?.address ? "border-red-500" : ""
          }`}
          {...register("address")}
        />
        {errors?.address && (
          <span className="text-red-500">{errors?.address?.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-md font-medium text-gray-700"
        >
          Your gender
        </label>
        <input
          type="text"
          id="gender"
          name="gender"
          placeholder="Your gender"
          className={`mt-1 p-2 focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md ${
            errors?.gender ? "border-red-500" : ""
          }`}
          {...register("gender")}
        />
        {errors?.gender && (
          <span className="text-red-500">{errors?.gender?.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="dateOfBirth"
          className="block text-md font-medium text-gray-700"
        >
          Your Date Of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          placeholder="Your dateOfBirth"
          className={`mt-1 p-2 focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md ${
            errors?.dateOfBirth ? "border-red-500" : ""
          }`}
          {...register("dateOfBirth")}
        />
        {errors?.dateOfBirth && (
          <span className="text-red-500">{errors?.dateOfBirth?.message}</span>
        )}
      </div>

      <div className="form-control">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Photo
        </label>
        <input
          type="file"
          id="image"
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

export default EditProfilePage;
