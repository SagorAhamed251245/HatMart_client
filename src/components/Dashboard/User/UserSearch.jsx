import React from "react";

const UserSearch = () => {
  return (
    <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
      <h2 className="text-2xl leading-tight">Users</h2>
      <div className="text-end">
        <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
          <div className=" relative ">
            <input
              type="text"
              id='"form-subscribe-Filter'
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#34B701] focus:border-transparent"
              placeholder="name"
            />
          </div>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-[#ff6347cc] rounded-lg shadow-md hover:bg-[#FF7B13] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="submit"
          >
            Filter
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSearch;
