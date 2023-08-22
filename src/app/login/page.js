import React from "react";
import Nav from "@/components/Shared/NavBar/Nav";
import Link from "next/link";
import EmailForm from "@/components/Login/EmailForm";
import SocialMediaForm from "@/components/Login/SocialMediaForm";

const LoginPage = () => {
  return (
    <>
<<<<<<< HEAD
    <Nav/>
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto p-6 bg-white rounded-lg shadow-md  w-96">
        <h2 className="text-2xl font-semibold text-[#FC873B] mb-4 text-center">Log in to Your Account</h2>
        <form className="space-y-4 mt-5">
          <div>
            <label htmlFor="email" className="block  text-md font-medium text-gray-700">
            Mobile phone number or email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Name'
              className="mt-1 p-2  focus:shadow-blue-400 transition-all focus:shadow-md h-10 outline-none w-full   shadow-lg rounded-md"
            />
=======
      <Nav />
      <div className="flex h-screen bg-gray-100">
        <div className="m-auto p-10 bg-white rounded-lg shadow-md  w-96">
          <h2 className="text-2xl font-semibold text-[#FC873B] mb-4 text-center">
            Log in to Your Account
          </h2>
          <EmailForm />

          <SocialMediaForm />
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/registation"
                className="text-#FE7216 font-semibold hover:underline transition duration-300"
              >
                Sign up
              </Link>
            </p>
>>>>>>> fa054fd55105d6531b47400fc8da09442c984a74
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
