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
    <div className="relative">
      <input
        onChange={handelOnchange}
        type="text"
        id="search-input"
        placeholder="
              Search Your Product"
        required
        className="input input-bordered w-[200px] lg:w-[500px] pr-16"
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
            !searchInput ? "cursor-not-allowed" : ""
          } btn bg-[#ff6347cc] text-white  absolute top-0 right-0 rounded-l-none hover:bg-[#FF7B13]`}
          disabled={!searchInput}
        >
          <AiOutlineSearch className="text-xl"></AiOutlineSearch>
        </button>
      </Link>
    </div>
  );
};

export default Search;
