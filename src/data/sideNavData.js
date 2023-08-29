import { BiSolidDashboard } from "react-icons/bi";
import { IoBagAdd } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

const user = {
  role: "admin",
};

const SideData = () => {
  let sideData = [];

  if (user.role === "admin") {
    sideData = [
      {
        path: "/dashboard",
        title: "Dashboard",
        icon: <BiSolidDashboard className="w-6" />,
      },
      {
        path: "/dashboard/addProduct",
        title: " Add Product",
        icon: <IoBagAdd />,
      },
      {
        path: "/dashboard/userListing",
        title: "User List",
        icon: <FaUserCog />,
      },
      {
        path: "/dashboard/addCategory",
        title: "Add Category",
        icon: <MdCategory />,
      },
      {
        path: "/",
        title: "Home",
        icon: <AiFillHome />,
      },
    ];
  } else if (user.role === "user") {
    sideData = [
      {
        path: "/dashboard/myOrder",
        title: "My Order",
      },
      {
        path: "/dashboard/myWishList",
        title: "My WishList",
      },
    ];
  }

  return sideData;
};

export default SideData;
