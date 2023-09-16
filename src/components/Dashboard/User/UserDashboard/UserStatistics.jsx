import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const UserStatistics = ({ MyOrders, wishlistProduct }) => {
  console.log(MyOrders);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      <div className="flex justify-between border border-gray-300 p-4 rounded-md">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Total Orders</h3>
          <h1 className="text-2xl font-bold">{MyOrders?.length}</h1>
        </div>
        <p>
          <FaCartArrowDown />
        </p>
      </div>
      <div className="flex justify-between border border-gray-300 p-4 rounded-md">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Total Cancel</h3>
          <h1 className="text-2xl font-bold">+2</h1>
        </div>
        <p>
          <MdOutlineRemoveShoppingCart />
        </p>
      </div>
      <div className="flex justify-between border border-gray-300 p-4 rounded-md">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">My Wishlist</h3>
          <h1 className="text-2xl font-bold">{wishlistProduct?.length}</h1>
        </div>
        <p>
          <AiFillHeart />
        </p>
      </div>
    </div>
  );
};

export default UserStatistics;
