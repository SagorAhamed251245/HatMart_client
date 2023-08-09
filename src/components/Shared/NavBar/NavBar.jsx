import { afterLoginNavData, beforeLoginNavData } from "@/data/navData";
import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  const user = "sagor";
  const li = user ? afterLoginNavData : beforeLoginNavData;

  return (
    <>
      <nav>
        <div className="navbar  mb-5">
          {/* Left-aligned section of the navbar */}
          <div className="navbar-start">
            <p>Harmart</p>
          </div>

          {/* Center-aligned section of the navbar (visible on larger screens) */}
          <div className="navbar-center  lg:flex gap-2">
            {/* Horizontal menu items */}
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-52  md:w-96"
              />
            </div>
            <button className="btn btn-primary ">Search</button>
          </div>

          {/* Right-aligned section of the navbar */}
          <div className="navbar-end">
            {/* Button labeled "Button" */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">sagor</div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  {li.map(({ path, title }) => (
                    <NavLink key={title} href={path}>
                      {title}
                    </NavLink>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
