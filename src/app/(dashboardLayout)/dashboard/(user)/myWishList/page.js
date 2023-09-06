import MyWishListTable from "@/components/Dashboard/User/MyWishList/MyWishListTable";
import React from "react";

const myWishList = () => {
  return (
    <section className="mt-5 px-2">
      <h3 className="text-3xl font-bold mb-5 md:text-start text-center">
        My Wishlist
      </h3>
      <MyWishListTable />
    </section>
  );
};

export default myWishList;
