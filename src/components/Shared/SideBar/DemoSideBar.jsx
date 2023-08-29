import SideData from "@/data/sideNavData";
import Link from "next/link";

const DemoSideBar = () => {
  const data = SideData();
  return (
    <aside className="md:w-[20%]">
      <div className="h-screen flex items-end justify-end px-4 pb-6">
        <button className="relative z-30 lg:hidden peer h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition">
          <span className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 m-auto"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
              />
            </svg>
          </span>
        </button>

        <div className="z-20 fixed top-0 -left-96 lg:left-0 h-screen w-9/12 lg:w-72 bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <nav role="navigation">
            <div className=" -mx-4 relative overflow-y-auto overflow-x-hidden p-2 h-[100vh]">
              <ul className="space-y-4 mb-12 px-4 mt-8">
                {data.map(({ path, title, icon }) => (
                  <li key={path}>
                    <Link
                      href={path}
                      className="flex gap-4 text-gray-600 hover:text-gray-800 transition"
                    >
                      {icon}
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="z-10  lg:hidden fixed top-0 left-0 w-screen  bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 peer:transition duration-200"></div>
      </div>
    </aside>
  );
};

export default DemoSideBar;
