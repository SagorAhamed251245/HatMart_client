import { BiSolidDashboard, BiSolidUserCircle } from "react-icons/bi";
import { IoBagAdd } from "react-icons/io5";
import { FaCartArrowDown, FaUserCog } from "react-icons/fa";
import { MdCategory, MdFeedback } from "react-icons/md";
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { GiBallPyramid } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { PiUserListFill } from "react-icons/pi";

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
        icon: <BiSolidDashboard />,
      },
      {
        path: "/dashboard/allProducts",
        title: "All Products",
        icon: <GiBallPyramid />,
      },
      {
        path: "/dashboard/addProduct",
        title: "Add Product",
        icon: <IoBagAdd />,
      },

      {
        path: "/dashboard/addCategory",
        title: "Add Category",
        icon: <MdCategory />,
      },

      {
        path: "/dashboard/transactions",
        title: "Transactions",
        icon: <GrTransaction />,
      },
      {
        path: "/dashboard/orders",
        title: "Orders",
        icon: <FaCartArrowDown />,
      },
      {
        path: "/dashboard/userListing",
        title: "User List",
        icon: <PiUserListFill />,
      },
      {
        path: "/dashboard/feedback",
        title: "Feedback",
        icon: <MdFeedback />,
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
        path: "/dashboard/myProfile",
        title: "My Profile",
        icon: <BiSolidUserCircle />,
      },
      {
        path: "/dashboard/myOrder",
        title: "My Order",
        icon: <FaCartArrowDown />,
      },
      {
        path: "/dashboard/myWishList",
        title: "My WishList",
        icon: <AiFillHeart className="text-red-300" />,
      },
      {
        path: "/",
        title: "Home",
        icon: <AiFillHome />,
      },
    ];
  }

  return sideData;
};

export default SideData;
