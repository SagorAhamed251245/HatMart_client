"use client";
import Image from "next/image";
import userImage from "../../../../assets/icons/user.png";
import SectionTitle from "@/components/Home/Products/SectionTitle";
import Link from "next/link";

import useAuth from "@/hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  return (
    <>
      <SectionTitle>My Profile</SectionTitle>
      <section className="flex items-center justify-center shadow-xl  ">
        <div className=" p-8 rounded-lg   space-y-4  w-full">
          <div className="flex justify-center">
            <Image
              src={user?.PhotoUrl || userImage}
              placeholder="blur"
              priority
              height={50}
              width={50}
              className="w-16 h-16 object-cover rounded-full"
            />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold">Full Name:</p>
            <p>Email Address:{user.email || "plece provide Your eamil"}</p>
            <p>Mobile Number:{""}</p>
            <p>Birth Day:</p>
            <p>Gender:</p>
            <p>Gender:</p>
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
