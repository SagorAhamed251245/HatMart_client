"use client";
import { afterLoginNavData, beforeLoginNavData } from "@/data/navData";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

import userImage from "@/assets/icons/user.png";
import Categories from "@/components/Home/Categories/Categories";
import Link from "next/link";

import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Search from "./Search";
import useAuth from "@/hooks/useAuth";
import { toast } from "react-hot-toast";
import LogoSVG from "./LogoSVG";
import { usePathname, useRouter } from "next/navigation";
import SunSVG from "./SunSVG";
import MoonSvg from "./MoonSvg";
import useTheme from "@/hooks/useTheme";
import { getCartItems } from "@/utils/cart/cartFunctions";

const NavBar = () => {
  const [cartItems, setCartItems] = useState([]);
  const cart = getCartItems();

  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { replace, refresh } = useRouter();
  const path = usePathname();
  const { uid, photoURL } = user || {};
  const li = uid ? afterLoginNavData : beforeLoginNavData;
  const handleLogout = async () => {
    const toastId = toast.loading("Loading...");
    try {
      await logout();
      const res = await fetch("/api/auth/", {
        method: "POST",
      });
      await res.json();
      if (
        path.includes("/dashboard") ||
        path.includes("/dashboard/myProfile") ||
        path.includes("/payment")
      ) {
        replace(`/login?redirectUrl=${path}`);
      }
      toast.dismiss(toastId);
      toast.success("Successfully logout!");
      startTransition(() => {
        refresh();
      });
    } catch (error) {
      toast.error("Successfully not logout!");
      toast.dismiss(toastId);
    }
  };

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);
  
  return (
    <>
      <nav className="shadow-md  z-10   bg-white dark:bg-transparent">
        <div className="navbar  lg:mb-2  lg:pt-5 px-5 md:px-10 lg:px-10  ">
          {/* Left-aligned section of the navbar */}
          <div className="navbar-start  h-10 ">
            <LogoSVG></LogoSVG>

            <Link
              href={"/"}
              className="h-24 md:flex hidden  justify-center item-center w-24 md:w-36"
            >
              <Image
                src="https://i.ibb.co/WtbFpmR/logo.png"
                className="object-cover  lg:w-36 md:w-32 w-20"
                height={144}
                width={144}
                alt="logo"
              />
            </Link>
          </div>

          {/* Center-aligned section of the navbar (visible on larger screens) */}
          <Search></Search>

          {/* Right-aligned section of the navbar */}
          <div className="navbar-end md:gap-5">
            {/* Button labeled "Button" */}
            <div className="hidden md:inline-block ">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  onChange={toggleTheme}
                  type="checkbox"
                  checked={theme === "dark"}
                />

                {/* sun icon */}

                <SunSVG />

                {/* moon icon */}

                <MoonSvg />
              </label>
            </div>

            {/* night */}
            <div className="hidden md:inline-block">
              <div className="flex relative items-center justify-center w-[35px] h-[35px]">
                <Link href={"/cart"}>
                  <HiOutlineShoppingBag className="text-[1.75rem] dark:text-white" />
                </Link>

                <div
                  className={`${
                    cartItems && cartItems?.length <= 0
                      ? "hidden"
                      : "absolute flex items-center justify-center z-30 -top-1 left-5 h-6 w-6 rounded-full bg-orange-400 font-bold text-sm"
                  }`}
                >
                  <span>{cartItems?.length}</span>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar cursor-pointer  ">
                <div className="w-8 h-8 mt-1 shadow-lg rounded-full overflow-hidden">
                  <Image
                    src={photoURL || userImage}
                    className="object-cover w-full"
                    height={400}
                    width={600}
                    alt="User Logo"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3  p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-10"
              >
                <li>
                  {li.map(({ path, title }) => (
                    <NavLink key={title} href={path}>
                      {title}
                    </NavLink>
                  ))}
                </li>
                {uid && (
                  <li>
                    <Link
                      href={""}
                      className="dark:text-white"
                      onClick={() => logout()}
                    >
                      LogOut
                    </Link>
                  </li>
                )}

                {/* for  small divice  */}
                <div className="md:hidden">
                  <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input
                      onChange={toggleTheme}
                      type="checkbox"
                      checked={theme === "dark"}
                    />

                    {/* sun icon */}

                    <SunSVG />

                    {/* moon icon */}

                    <MoonSvg />
                  </label>
                </div>

                {/* night */}
                <div className="md:hidden ">
                  <div className="flex relative items-center justify-center w-[35px] h-[35px]">
                    <Link href={"/cart"}>
                      <HiOutlineShoppingBag className="text-[1.75rem] dark:text-white" />
                    </Link>
                    <div className="absolute z-30 top-0 badge">+99</div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        {/* category */}
        {/*  <div className=" w-full  bg-white dark:bg-transparent">
          <Categories></Categories>
        </div> */}
      </nav>
    </>
  );
};

export default NavBar;
