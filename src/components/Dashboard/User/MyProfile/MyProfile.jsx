"use client";
import Image from "next/image";
import userImage from "../../../../assets/icons/user.png";
import SectionTitle from "@/components/Home/Products/SectionTitle";
import Link from "next/link";
import getUserData from "@/data/getUserData";

const MyProfile = () => {
  const user = getUserData();
  return (
    <>
      <SectionTitle>My Profile</SectionTitle>
      <section className="flex items-center justify-center shadow-xl  ">
        <div className=" p-8 rounded-lg   space-y-4  w-full">
          <div className="flex justify-center">
            <Image
              src={user?.image || userImage}
              priority
              height={50}
              width={50}
              className="w-16 h-16 object-cover rounded-full"
            />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold">
              <span className="text-green-">Full Name</span>: {user?.name}
            </p>
            <p className="text-sm">
              <span className="text-green-400 font-bold">Email Address: </span>
              {user?.email || "please provide Your email"}
            </p>
            <p className="text-sm">
              <span className="text-green-400 font-bold"> Mobile Number</span>:{" "}
              {user?.mobileNumber || "please provide Your mobileNumber"}
            </p>
            <p className="text-sm">
              <span className="text-green-400 font-bold">Date Of Birth</span>:{" "}
              {user?.dateOfBirth || "please provide Your Date Of Birth"}
            </p>
            <p className="text-sm">
              <span className="text-green-400 font-bold">Gender</span>:{" "}
              {user?.gender || "please provide Your gender"}
            </p>
            <p className="text-sm">
              <span className="text-green-400 font-bold">Address</span>:{" "}
              {user?.address || "please provide Your address"}
            </p>
            <p className="text-sm">
              <span className="text-green-400 font-bold">Role</span>:{" "}
              {user?.role}
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href={"/dashboard/myProfile/editProfile"}
              className="bg-[#34b701]  hover:bg-green-300 text-white hover:text-black  px-4 py-2 rounded-md"
            >
              Edit Profile
            </Link>
            <Link
              href={"/"}
              className="bg-[#FF7B13] hover:bg-orange-300 text-white  hover:text-black px-4 py-2 rounded-md"
            >
              Change Password
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
