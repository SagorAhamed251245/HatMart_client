"use client";
import getUserData from "@/data/getUserData";
import useAuth from "@/hooks/useAuth";
import editUser from "@/utils/editUser";
import postUser from "@/utils/users/postUser";
import userImage from "../../../../../../assets/icons/user.png";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { TbCameraPlus } from "react-icons/tb";

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
      className="space-y-4 lg:w-1/2 shadow-xl p-3 md:p-6 border rounded-lg mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="text-xl text-gray-600 font-semibold text-center">Edit Profile</span>
      {/* upload */}
      <div className="w-[100px] relative m-auto">
        <Image
          src={user?.image || userImage}
          alt="user image"
          height={50}
          width={50}
          className="w-24 h-24 object-cover rounded-full border-2 border-orange-400 object-center"
        />
        {/* round */}
        <div className="absolute bottom-2 right-1 bg-orange-500 w-6 h-6 p-1 rounded-full leading-[33px] overflow-hidden text-center">
          <input
            title="upload image"
            type="file"
            id="image"
            onChange={uploadImage}
            className="absolute scale-[2] opacity-0 cursor-pointer"
          />
          <TbCameraPlus className="h-full w-full text-white" />
        </div>
      </div>
      <div>
        <label
          htmlFor="name"
          className="block text-xs ml-1 mb-1 font-semibold text-gray-500"
        >
          FullName
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name Here ex:Clark Joseph Kent."
          className={`border p-2 focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md ${
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
          className="block text-xs ml-1 mb-1 font-semibold text-gray-500"
        >
          Phone
        </label>
        <input
          type="number"
          id="mobileNumber"
          name="mobileNumber"
          placeholder="Your Phone Number Here ex: +0012345.."
          className={`mt-1 p-2 focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md border ${
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
          className="block text-xs ml-1 mb-1 font-semibold text-gray-500"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Your address Here ex: 32/3 mothlane,kalkata.."
          className={`mt-1 p-2 focus:shadow-blue-400 border transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md ${
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
          className="block text-xs ml-1 mb-1 font-semibold text-gray-500"

        >
          Gender
        </label>
        <input
          type="text"
          id="gender"
          name="gender"
          placeholder="Your gender Here ex: male,female.."
          className={`mt-1 p-2 focus:shadow-blue-400 border transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md ${
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
          className="block text-xs ml-1 mb-1 font-semibold text-gray-500"
        >
          Date Of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          placeholder="Your Birthday Here"
          className={`mt-1 p-2 focus:shadow-blue-400 border transition-all focus:shadow-md h-10 outline-none w-full shadow-lg rounded-md ${
            errors?.dateOfBirth ? "border-red-500" : ""
          }`}
          {...register("dateOfBirth")}
        />
        {errors?.dateOfBirth && (
          <span className="text-red-500">{errors?.dateOfBirth?.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 btn bg-orange-500 hover:bg-orange-600 active:bg-orange-200 text-white hover rounded-md transition duration-300"
      >
        Registration
      </button>
    </form>
  );
};

export default EditProfilePage;
