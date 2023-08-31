import React, { useEffect, useState } from 'react';

const AllProductsFilterByPrice = ({data, setData}) => {
    const [sortOption, setSortOption] = useState("");

    const sortProductsByPrice = (option) => {
        const sortedData = [...data]; // Create a copy of the data array
    
        if (option === "highToLow") {
          sortedData.sort((a, b) => b.price - a.price); // Sort in descending order
        } else if (option === "lowToHigh") {
          sortedData.sort((a, b) => a.price - b.price); // Sort in ascending order
        }
    
        setData(sortedData); // Update the data state with sorted products
      };
    
      useEffect(() => {
        sortProductsByPrice(sortOption); // Call the sorting function when sortOption changes
      }, [sortOption]);

    return (
        <select
            className="border border-green-400 rounded w-fit p-2 shadow-md"
            onChange={(e) => setSortOption(e.target.value)} // Update sortOption when selection changes
          >
            <option disabled value="">
              Select By Price
            </option>
            <option value="highToLow">High to low</option>
            <option value="lowToHigh">Low to High</option>
          </select>
    );
};

export default AllProductsFilterByPrice;