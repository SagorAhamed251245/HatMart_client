"use client";

import { useEffect, useState } from "react";
import UserStatistics from "./UserStatistics";
import UserRecentOrders from "./UserRecentOrders";
import getMyOrders from "@/utils/users/getMyOrders";
import getUserData from "@/data/getUserData";
import getWishListByUserId from "@/utils/users/getWishListByUserId";

const UserDashboard = () => {
  const [MyOrders, setOrders] = useState([]);
  const [wishlistProduct, setWishlistProduct] = useState([]);
  const user = getUserData();
  useEffect(() => {
    // get user order data
    (async () => {
      const data = await getMyOrders(user?._id);
      setOrders(data);
    })();
    // get user wishlist data
    (async () => {
      const wishlistData = await getWishListByUserId(user?._id);
      setWishlistProduct(wishlistData);
    })();
  }, [user?._id]);
  return (
    <div>
      <h3 className="font-bold text-2xl">Dashboard</h3>
      <UserStatistics MyOrders={MyOrders} wishlistProduct={wishlistProduct} />
      <UserRecentOrders MyOrders={MyOrders} />
    </div>
  );
};

export default UserDashboard;
