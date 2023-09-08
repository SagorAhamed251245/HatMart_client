"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DateSelect from "./DateSelect";
import OverView from "./OverView/OverView";
const AdminDashboard = () => {
  return (
    <div className="mb-5">
      <div className="flex justify-between gap-2">
        <h3 className="text-3xl font-bold mb-5 md:text-start text-center">
          Dashboard
        </h3>
        <div className="flex gap-4">
          <div className="">
            <label className="text-xl font-semibold mb-2" htmlFor="salesPeriod">
              Select Date
            </label>
            <DateSelect />
          </div>
          <button className="text-white h-fit mt-auto block bg-black font-medium px-4 py-1.5 rounded-md hover:bg-black/80 duration-300 mb-1">
            Download
          </button>
        </div>
      </div>
      <Tabs>
        <TabList className="text-center  mx-auto  flex gap-6 tabs text-gray-600 py-3 duration-500">
          <Tab
            className="font-semibold cursor-pointer  border border-gray-300 rounded-full px-5 py-1 outline-none"
            selectedClassName="text-[#34B701]  !border-[#34B701] duration-200"
          >
            Overview
          </Tab>
          <Tab
            className="font-semibold cursor-pointer  border border-gray-300 rounded-full px-5 py-1 outline-none"
            selectedClassName="text-[#34B701]  !border-[#34B701] duration-200"
          >
            Analytics
          </Tab>
          <Tab
            className="font-semibold cursor-pointer  border border-gray-300 rounded-full px-5 py-1 outline-none"
            selectedClassName="text-[#34B701]  !border-[#34B701] duration-200"
          >
            Reports
          </Tab>
          <Tab
            className="font-semibold cursor-pointer  border border-gray-300 rounded-full px-5 py-1 outline-none"
            selectedClassName="text-[#34B701]  !border-[#34B701] duration-200"
          >
            Notifications
          </Tab>
        </TabList>

        <TabPanel>
          {/* Over View */}
          <OverView />
        </TabPanel>
        <TabPanel>Analytics</TabPanel>
        <TabPanel>Reports</TabPanel>
        <TabPanel>Notifications</TabPanel>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
