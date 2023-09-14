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
      <div className="flex justify-center items-center h-full w-full">
        <section className="shadow-2xl  rounded-lg">
          <div className=" md:p-8 p-4 rounded-lg   space-y-4  w-full">
            <div className="flex justify-center">
              <Image
                src={user?.image || userImage}
                priority
                height={50}
                width={50}
                className="w-16 h-16 object-cover border-2 border-orange-500 rounded-full"
              />
            </div>
            <div>
              <p className="text-lg font-semibold my-3">
                <span className="text-green-">
                  {user?.name || "No Name Available"}
                </span>
              </p>
              
              <table className="font-semibold">
                <tr className="w-full">
                  <td className="w-1/2">
                    <span className="text-gray-700 ">Email Address :</span>
                  </td>
                  <td className="w-1/2">
                    <span className=" text-sm text-gray-500">
                      {" "}
                      {user?.email || "No Email Available"}
                    </span>
                  </td>
                </tr>
                <tr className="w-full">
                  <td className="w-1/2">
                    <span className="text-gray-700">Phone :</span>
                  </td>
                  <td className="w-1/2">
                    <span className=" text-sm text-gray-500">
                      {" "}
                      {user?.mobileNumber || "No Phone Available"}
                    </span>
                  </td>
                </tr>
                <tr className="w-full">
                  <td className="w-1/2">
                    <span className="text-gray-700">Date of Birth :</span>
                  </td>
                  <td className="w-1/2">
                    <span className=" text-sm text-gray-500">
                      {" "}
                      {user?.dateOfBirth || "No Birthday Available"}
                    </span>
                  </td>
                </tr>
                <tr className="w-full">
                  <td className="w-1/2">
                    <span className="text-gray-700">Gender :</span>
                  </td>
                  <td className="w-1/2">
                    <span className=" text-sm text-gray-500">
                      {" "}
                      {user?.gender || "Gender not specified"}
                    </span>
                  </td>
                </tr>
                <tr className="w-full">
                  <td className="w-1/2">
                    <span className="text-gray-700">Address :</span>
                  </td>
                  <td className="w-1/2">
                    <span className=" text-sm text-gray-500">
                      {" "}
                      {user?.address || "No address available"}
                    </span>
                  </td>
                </tr>
                <tr className="w-full">
                  <td className="w-1/2">
                    <span className="text-gray-700">Role :</span>
                  </td>
                  <td className="w-1/2">
                    <span className=" text-sm text-gray-500">
                      {" "}
                      {user?.role || "user"}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
            <div className="flex space-x-4">
              <Link
                href={"/dashboard/myProfile/editProfile"}
                className="bg-[#34b701] active:bg-white  hover:bg-[#2aa700] text-white font-semibold px-4 py-2 rounded"
              >
                Edit Profile
              </Link>
              <Link
                href={"/"}
                className="bg-[#FF7B13] hover:bg-orange-300 text-white font-semibold px-4 py-2 rounded"
              >
                Change Password
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyProfile;
