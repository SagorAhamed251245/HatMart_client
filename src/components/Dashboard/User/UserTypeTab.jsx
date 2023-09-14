"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import UserTable from "./UserTable";
import { useState } from "react";
import UserSearch from "./UserSearch";

const UserTypeTab = ({ usersData }) => {
  const [searchData, setSearchData] = useState("");
  const [userRole, setUserRole] = useState("user");

  //   filter data by user role
  const filterUserByRole = usersData.filter((user) => user.role === userRole);

  //   filter data by search result
  const searchUserData =
    filterUserByRole.filter(
      (user) =>
        user.name.toLowerCase().includes(searchData.toLowerCase()) ||
        user.email.toLowerCase().includes(searchData.toLowerCase())
    ) || filterUserByRole;

  return (
    <div className=" rounded-xl p-5 mt-10 min-h-screen">
      <Tabs>
        <div className="flex">
          <TabList className="text-center  mx-auto  flex items-center gap-6 tabs text-gray-600 py-3 duration-500 w-full">
            <Tab
              onClick={() => setUserRole("user")}
              className="font-semibold cursor-pointer  border border-gray-300 rounded-full px-5 py-1 outline-none"
              selectedClassName="text-[#ff6347cc]  !border-[#ff6347cc] duration-300"
            >
              Users
            </Tab>
            <Tab
              onClick={() => setUserRole("admin")}
              className="font-semibold cursor-pointer  border border-gray-300 rounded-full px-5 py-1 outline-none"
              selectedClassName="text-[#ff6347cc]  !border-[#ff6347cc] duration-300"
            >
              Admin
            </Tab>
          </TabList>
          <UserSearch searchData={searchData} setSearchData={setSearchData} />
        </div>

        <TabPanel>
          <UserTable usersData={searchUserData} />
        </TabPanel>
        <TabPanel>
          <UserTable usersData={searchUserData} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default UserTypeTab;
