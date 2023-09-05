import React from "react";

const AllProductsFilterByOther = ({ setData, products }) => {
  const sortingFunctions = {
    "Latest Added": (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    "Latest Updated": (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
    "Latest Added (Last 7 Days)": (a, b) => {
      const currentDate = new Date();
      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);

      const aCreatedAt = new Date(a.createdAt);
      const bCreatedAt = new Date(b.createdAt);

      if (aCreatedAt >= lastWeek && bCreatedAt >= lastWeek) {
        return bCreatedAt - aCreatedAt;
      } else if (aCreatedAt >= lastWeek) {
        return -1;
      } else if (bCreatedAt >= lastWeek) {
        return 1;
      } else {
        return bCreatedAt - aCreatedAt;
      }
    },
    // Add more sorting functions for other criteria here
  };

  const handleSort = (criteria) => {
    console.log(criteria);

    let sortingFunction = sortingFunctions[criteria];

    if (!sortingFunction) {
      // If no specific sorting selected, keep the original order
      setData([...products]); // Clone the original array
      return;
    }

    let sortedData = [...products]; // Clone the data array
    sortedData.sort(sortingFunction);

    setData(sortedData); // Update the state with sorted data
  };

  return (
    <select
      className="border border-green-400 rounded w-fit p-2 shadow-md"
      onChange={(e) => handleSort(e.target.value)}
    >
      <option disabled value="">
        Select by others
      </option>
      <option>Latest Added</option>
      <option>Latest Updated</option>
      {/* Add more sorting options as needed */}
      <option>Best Selling</option>
      <option>High rating</option>
    </select>
  );
};

export default AllProductsFilterByOther;
