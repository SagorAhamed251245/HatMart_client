import UserTypeTab from "@/components/Dashboard/User/UserTypeTab";
import getAllUsers from "@/utils/users/getAllUsers";
import React from "react";

const userListingPage = async () => {
  const usersData = await getAllUsers(); // fetch users data
  return (
    <div className="px-4 mx-auto sm:px-8 mt-5">
      <UserTypeTab usersData={usersData} />
    </div>
  );
};

export default userListingPage;
