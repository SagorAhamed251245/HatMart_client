"use client";

import { FaSearch } from "react-icons/fa";

const UserSearch = ({ searchData, setSearchData }) => {
  return (
    <div className="flex  justify-end items-center w-full mb-1 sm:mb-0 ">
      <div className="text-end">
        <form className="flex flex-col justify-center w-3/4 max-w-md space-y-3 md:flex-row md:w-full md:space-y-0">
          <div className=" relative ">
            <FaSearch
              className="absolute text-[#ff6347cc] top-3 left-3"
              size={20}
            />
            <input
              onChange={() => setSearchData(event.target.value)}
              type="text"
              id='"form-subscribe-Filter'
              className=" rounded-full flex-1 appearance-none border border-gray-300 w-full py-2 pr-4 pl-10 bg-white dark:bg-transparent dark:placeholder:text-gray-300 text-gray-700 placeholder-gray-500 shadow-xl text-base focus:outline-none focus:ring-2 ring-1 ring-[#34B701] focus:border-transparent "
              placeholder="Filter name and email..."
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSearch;
