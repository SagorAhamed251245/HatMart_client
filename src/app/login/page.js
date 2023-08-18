import React from "react";
import Nav from "@/components/Shared/NavBar/Nav";
import Link from "next/link";
import EmailForm from "@/components/Login/EmailForm";
import SocialMediaForm from "@/components/Login/SocialMediaForm";

const LoginPage = () => {
  return (
    <>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
