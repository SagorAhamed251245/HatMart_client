import SideData from "@/data/sideNavData";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

const SideBar = () => {
  const data = SideData();
  return (
    <aside className=" border py-5 md:w-[5%] w-[40px] flex flex-col  justify-between items-center fixed bg-white shadow-xl   h-screen">
      <div className="h-[60vh] flex flex-col  justify-between items-center">
        {data.map(({ path, title, icon }) => (
          <Link key={path} href={path}>
            {icon}
            {title}
          </Link>
        ))}
      </div>

      <div>
        <hr />
        <Link href={"/"}>
          {Home} <AiFillHome />
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
