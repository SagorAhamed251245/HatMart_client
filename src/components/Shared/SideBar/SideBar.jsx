"use client";
import SideData from "@/data/sideNavData";
import Link from "next/link";

const SideBar = () => {
  const data = SideData();
  return (
    <aside className="lg:w-[20%] z-30  shadow-xl fixed lg:static bottom-10 right-5">
      <div className="lg:h-screen flex items-end justify-end  ">
        <button className="relative z-30 lg:hidden peer h-10 w-10 rounded-full bg-[#FF7218] hover:bg-[#ffa66e]focus:bg-bg-[#ffa66e] active:bg-[#ffa66e] transition">
          <span className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 m-auto"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
              />
            </svg>
          </span>
        </button>

        <div
          className="z-20 fixed top-0 -left-96 lg:left-0 h-screen  lg:w-[20%]
         bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200"
        >
          <nav role="navigation">
            <div className=" -mx-4 relative overflow-y-auto  overflow-x-hidden  h-[100vh]">
                <div className="text-2xl font-bold text-blue-600 text-center"><span className="text-[#32B901]">Hat</span><span className="text-[#FE8A48]">Mart </span> Dashboard</div>
              <ul className="  px-4 mt-4">
              
                {data.map(({ path, title, icon }) => (
                  <li key={path}>
                    <Link
                      href={path}
                      className="flex items-center   border-b-2  p-3  text-black  transition hover:bg-slate-200 hover:text-blue-800 hover:font-semibold"
                    >
                      <div className="text-blue-800  text-2xl"> {icon}</div>
                      <div className=" ml-3">{title}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
