"use client";

import useAuth from "@/hooks/useAuth";
import createJWT from "@/utils/createJWT";
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

      await createJWT({ email });
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
      <p className="text-sm text-gray-600 text-center dark:text-white">
        Or log in with social media
      </p>
      <div className="flex justify-center items-center space-x-4 mt-2">
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="text-black bg-slate-200  focus:ring-2 focus:outline-none focus:ring-[#000]/50 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 font-semibold"
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
