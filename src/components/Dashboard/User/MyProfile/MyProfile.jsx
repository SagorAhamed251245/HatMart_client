"use client";
import Image from "next/image";
import userImage from "../../../../assets/icons/user.png";
import SectionTitle from "@/components/Home/Products/SectionTitle";
import Link from "next/link";
import getUserData from "@/data/getUserData";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";
import editUser from "@/utils/editUser";

const MyProfile = () => {
  const user = getUserData();
  const [isOpen, setIsOpen] = useState(false);
  const [validityForm, setValidityForm] = useState(true);
  const { changePassword } = useAuth();

  const handleVerifyPassword = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    if (user?.password === password) {
      setValidityForm(false);
      toast.success(`Your password Matched`);
      e.target.password.value = "";
    } else {
      setValidityForm(true);
      toast.error(`Your password Doesn't match`);
      e.target.password.value = "";
    }
  };

  const handleNewPassword = async (e) => {
    e.preventDefault();

    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (newPassword === confirmPassword) {
      changePassword(confirmPassword).then((response) => {
        

        
      })
      .catch(error => {
        console.error(error)
        toast.error(`Something went wrong, Try Again`);
      })
    } else {
      toast.error(`Your both password Doesn't match each other`);
    }
  };

  return (
    <>
      <div className="dark:text-white  w-full">
        <section className="">
          <div className=" md:p-8 p-4 rounded-lg   space-y-4  w-full">
            <div className="flex flex-col md:items-start items-center justify-center">
              <Image
                src={user?.image || userImage}
                priority
                height={50}
                width={50}
                className="w-16 h-16 object-cover border-2 border-orange-500 rounded-full"
              />
              <p className="text-lg font-semibold my-3">
                <span className="text-green-">
                  {user?.name || "No Name Available"}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col md:hidden it">
                <span className="text-xs text-gray-400 ">Email</span>
                <span>
                  {user?.email?.length > 20
                    ? user?.email?.slice(0, 20) + "..."
                    : user?.email || "No Email Available"}
                </span>
              </div>
              <div className="md:flex hidden flex-col it">
                <span className="text-xs text-gray-400 ">Email</span>
                <span>{user?.email || "No Email Available"}</span>
              </div>
              <div className="flex flex-col it">
                <span className="text-xs text-gray-400 ">Role</span>
                <span>{user?.role || "user"}</span>
              </div>
              <div className="flex flex-col it">
                <span className="text-xs text-gray-400 ">Address</span>
                <span>{user?.address || "No address available"}</span>
              </div>
              <div className="flex flex-col it">
                <span className="text-xs text-gray-400 ">Gender</span>
                <span>{user?.gender || "Gender not specified"}</span>
              </div>
              <div className="flex flex-col it">
                <span className="text-xs text-gray-400 ">Birthday</span>
                <span>
                  {user?.dateOfBirth
                    ? new Date(user.dateOfBirth).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "No Birthday Available"}
                </span>
              </div>
              <div className="flex flex-col it">
                <span className="text-xs text-gray-400 ">Phone</span>
                <span>+880{user?.mobileNumber || "No Phone Available"}</span>
              </div>
              <div className="flex flex-col it">
                <span className="text-xs text-gray-400 ">Password</span>
                <div className="flex items-center gap-3">
                  <span>{"***************"}</span>{" "}
                  <span className="text-xs text-blue-400 cursor-pointer hover:text-blue-500 hover:underline duration-500">
                    <span onClick={() => setIsOpen(true)}>Change Password</span>
                  </span>
                  <Dialog
                    open={isOpen}
                    onClose={() => {
                      setIsOpen(false);
                      setValidityForm(true);
                    }}
                    className="relative z-50"
                  >
                    {/* The backdrop, rendered as a fixed sibling to the panel container */}
                    <div
                      className="fixed inset-0 bg-black/50"
                      aria-hidden="true"
                    />

                    {/* Full-screen container to center the panel */}
                    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                      {/* The actual dialog panel  */}
                      <Dialog.Panel className="mx-auto max-w-lg rounded bg-white">
                        {validityForm ? (
                          <form
                            onSubmit={handleVerifyPassword}
                            className="text-start flex flex-col p-10 justify-center"
                          >
                            <p className="text-xl font-semibold mb-3 text-black">
                              Please Enter your Password
                              <p className="text-sm text-gray-400 mt-2">
                                Enter your password to verify that it's your
                                account
                              </p>
                            </p>
                            <div className="border-2 focus-within:border-green-500 rounded py-1 px-2 border-gray-300">
                              <input
                                type="password"
                                name="password"
                                placeholder="Enter your password Here"
                                className="w-full outline-none bg-transparent"
                              />
                            </div>
                            <div className="flex justify-between mt-4">
                              <button
                                type="submit"
                                className="bg-[#34b701] active:bg-white  hover:bg-[#2aa700] text-white font-semibold px-4 py-2 rounded"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        ) : (
                          <form
                            onSubmit={handleNewPassword}
                            className="text-start flex flex-col p-10 justify-center"
                          >
                            <p className="text-xl font-semibold text-black mb-6">
                              Enter your New Password
                            </p>
                            <label
                              htmlFor="newPassword"
                              className="text-xs text-gray-400"
                            >
                              New Password
                            </label>
                            <div className="border-2 focus-within:border-green-500 rounded py-1 px-2 mb-3 border-gray-300">
                              <input
                                type="text"
                                name="newPassword"
                                placeholder="Enter your new password"
                                className="w-full outline-none bg-transparent"
                              />
                            </div>
                            <label
                              htmlFor="confirmPassword"
                              className="text-xs text-gray-400"
                            >
                              Confirm Password
                            </label>
                            <div className="border-2 focus-within:border-green-500 rounded py-1 px-2 border-gray-300">
                              <input
                                type="text"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                className="w-full outline-none bg-transparent"
                              />
                            </div>
                            <div className="flex justify-between mt-4">
                              <button
                                type="submit"
                                className="bg-[#34b701] active:bg-white  hover:bg-[#2aa700] text-white font-semibold px-4 py-2 rounded"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        )}

                        {/* ... */}
                      </Dialog.Panel>
                    </div>
                  </Dialog>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link
                href={"/dashboard/myProfile/editProfile"}
                className="bg-[#34b701] active:bg-white  hover:bg-[#2aa700] text-white font-semibold px-4 py-2 rounded"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyProfile;
