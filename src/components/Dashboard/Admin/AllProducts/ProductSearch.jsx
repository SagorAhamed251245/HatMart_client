"use client";
import { FaSearch } from "react-icons/fa";

const ProductSearch = ({ products, setData }) => {
  const handleSearchByChange = (searchValue) => {
    // e.preventDefault()

    const searchData = products.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (searchData) {
      setData(searchData);
    } else {
      // No Data found
    }
  };

  return (
    <form className="flex flex-col justify-center w-3/4 max-w-md space-y-3 md:flex-row md:w-full md:space-y-0">
      <div className=" relative ">
        <FaSearch
          className="absolute text-[#ff6347cc] top-3 left-3"
          size={20}
        />
        <input
          onChange={() => handleSearchByChange(event.target.value)}
          type="text"
          name="search"
          id='"form-subscribe-Filter'
          className=" rounded-full flex-1 appearance-none border border-gray-300 w-full py-2 pr-4 pl-10 bg-white text-gray-700 placeholder-gray-500 shadow-xl text-base focus:outline-none focus:ring-2 ring-1 ring-[#34B701] focus:border-transparent focus:placeholder-opacity-0"
          placeholder="Enter Product name here"
        />
      </div>
    </form>
  );
};

export default ProductSearch;
