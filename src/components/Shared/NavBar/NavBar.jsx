"use client";
import { afterLoginNavData, beforeLoginNavData } from "@/data/navData";
import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";

import userImage from "@/assets/icons/user.png";
import Categories from "@/components/Home/Categories/Categories";
import Link from "next/link";

import { BiSolidCartAlt } from "react-icons/bi";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import Search from "./Search";
import useAuth from "@/hooks/useAuth";
import { toast } from "react-hot-toast";
import LogoSVG from "./LogoSVG";

const NavBar = () => {
  const { user, logout } = useAuth();

  const { uid, photoURL } = user || {};
  const li = uid ? afterLoginNavData : beforeLoginNavData;

  return (
    <>
      <nav className="shadow-md  mb-[25px] lg:mb-[50px] top-0 bg-white">
        <div className="navbar  lg:mb-2  lg:pt-5 lg:px-10  ">
          {/* Left-aligned section of the navbar */}
          <div className="navbar-start  h-10 ">
            <LogoSVG></LogoSVG>
            <div className="h-24 flex justify-center item-center  w-24 md:w-36">
              <Link href={"/"}>
                <Image
                  src="https://i.ibb.co/WtbFpmR/logo.png"
                  className="object-cover w-full"
                  height={144}
                  width={144}
                />
              </Link>
            </div>
          </div>

          {/* Center-aligned section of the navbar (visible on larger screens) */}
          <Search></Search>

          {/* Right-aligned section of the navbar */}
          <div className="navbar-end md:gap-5">
            {/* Button labeled "Button" */}
            <div className="hidden ">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* sun icon */}
                <BsSunFill />

                {/* moon icon */}
                <BsFillMoonFill />
              </label>
            </div>

            {/* night */}
            <div className="hidden md:inline-block">
              <div className="flex  items-center justify-center w-[35px] h-[35px]">
                <Link href={"cart"}>
                  <BiSolidCartAlt className="text-3xl" />
                </Link>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar cursor-pointer  ">
                <div className="w-10 rounded overflow-hidden">
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
                    <Link href={""} onClick={() => logout()}>
                      LogOut
                    </Link>
                  </li>
                )}

                {/* for  small divice  */}
                <div className="md:hidden hidden">
                  <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* sun icon */}

                    {/* moon icon */}
                    <BsFillMoonFill />
                  </label>
                </div>

                {/* night */}
                <div className="md:hidden ">
                  <div className="flex w-[35px] h-[35px]   items-center justify-center">
                    <Link href={"cart"}>
                      <BiSolidCartAlt className="text-3xl" />
                    </Link>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        {/* category */}
        <div className=" w-full  bg-white ">
          <Categories></Categories>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
