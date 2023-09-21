"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [searchInput, setSearchInput] = useState(null);

  const handelOnclick = () => {
    const searchInputValue = document.getElementById("search-input").value;
    setSearchInput(searchInputValue);
  };
  const handelOnchange = () => {
    const searchInputValue = document.getElementById("search-input").value;
    setSearchInput(searchInputValue);
  };

  return (
    <div className="relative dark:text-white">
      <input
        onChange={handelOnchange}
        type="text"
        id="search-input"
        placeholder="Search Hatmart"
        required

        className="input input-bordered focus:outline-none focus:border-gray-400/80 border w-[200px] md:w-[300px] lg:w-[500px]  pr-16 dark:text-white"

      />
      <Link
        href={{
          pathname: `/searchProduct`,
          query: {
            search: searchInput,
          },
        }}
      >
        <button
          onClick={handelOnclick}
          className={` ${
            !searchInput ? "cursor-not-allowed dark:bg-gray-500" : ""
          } btn bg-[#ff6347cc] text-white  absolute top-0 right-0 rounded-l-none hover:bg-[#FF7B13]`}
          disabled={!searchInput}
        >
          <AiOutlineSearch className="text-xl dark:text-white "></AiOutlineSearch>
        </button>
      </Link>
    </div>
  );
};

export default Search;
