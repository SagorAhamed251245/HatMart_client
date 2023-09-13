"use client";

import useAuth from "@/hooks/useAuth";
import postUser from "@/utils/users/postUser";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import toast from "react-hot-toast";

const SocialMediaForm = () => {
  const { googleLogin } = useAuth();
  const { replace, refresh } = useRouter();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const res = await googleLogin();
      const { displayName, email, photoURL } = res.user;
      const userData = { name: displayName, email, image: photoURL };
      startTransition(() => {
        refresh();
        replace(from);
        toast.dismiss(toastId);
        toast.success("User signed in successfully");
      });
      await postUser(userData);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };
  return (
    <div className="mt-4">
      <p className="text-sm text-gray-600 text-center">
        Or log in with social media
      </p>
      <div className="flex justify-between space-x-4 mt-2">
        <button
          type="button"
          className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
        >
          <svg
            className="w-4 h-4 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fillRule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clip-rule="evenodd"
            />
          </svg>
          Facebook
        </button>
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="text-black bg-slate-200  focus:ring-4 focus:outline-none focus:ring-[#000]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 font-semibold"
        >
          <span className="h-5 w-5 mr-2">
            <Image
              src="https://i.ibb.co/0mk8yJX/image-1.png"
              height={48}
              width={49}
              alt="google logo"
            />
          </span>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialMediaForm;
