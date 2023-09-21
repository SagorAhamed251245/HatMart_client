import React from "react";
import Nav from "@/components/Shared/NavBar/Nav";
import Link from "next/link";
import EmailForm from "@/components/Login/EmailForm";
import SocialMediaForm from "@/components/Login/SocialMediaForm";
export const metadata = {
  title: "HatMat/Login",
};
const LoginPage = () => {
  return (
    <>
      <Nav />
      <div className="flex h-screen bg-gray-100 dark:bg-transparent dark:text-white">
        <div className="m-auto p-10 bg-white dark:bg-transparent dark:border-white dark:border rounded-lg shadow-md  w-96">
          <h2 className="text-2xl font-semibold text-[#FC873B] mb-4 text-center">
            Log in to Your Account
          </h2>
          <EmailForm />

          <SocialMediaForm />
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-white">
              Don't have an account?{" "}
              <Link
                href="/registration"
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
