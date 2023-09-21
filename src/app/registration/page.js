import EmailForm from "@/components/Registation/EmailForm";
import Nav from "@/components/Shared/NavBar/Nav";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "HatMat/Registration",
};
const Registration = () => {
  return (
    <>
      <Nav />
      <div className="flex h-screen bg-gray-100 dark:bg-transparent  dark:border dark:border-white dark:text-white">
        <div className="m-auto p-6 bg-white dark:bg-transparent  dark:border rounded-lg shadow-md  w-96">
          <h2 className="text-2xl font-semibold text-[#FC873B] mb-4 text-center ">
            Registration to Your Account
          </h2>
          <EmailForm />
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-white">
              Have an account?
              <Link
                href="/login"
                className="text-#FE7216 font-semibold   hover:underline transition duration-300 ml-1"
              >
                log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
