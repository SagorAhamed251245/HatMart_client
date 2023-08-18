const FilterAsPrice = ({ setSortOrder, sortOrder, setViewAsList }) => {
  const handleSortChange = (event) => {
    const newSortOrder = event.target.value;
    setSortOrder(newSortOrder);
  };

  const handleViewChange = (event) => {
    const newSortOrder = event.target.value;
    if (newSortOrder === "gridView") {
      setViewAsList(false);
    } else {
      setViewAsList(true);
    }
  };
  return (
    <>
      <div className="mt-5 w-full flex justify-end gap-5">
        <div>
          <label htmlFor="sortOrder" className="text-[#FF7B13] font-bold">
            Sort by:{" "}
          </label>
          <select
            id="sortOrder"
            value={sortOrder}
            className="border py-2 px-3 text-[#34B701] bg-green-100  text-sm"
            onChange={handleSortChange}
          >
            <option value="bestMatch">Best Match</option>
            <option value="highToLow">High to Low</option>
            <option value="lowToHigh">Low to High</option>
          </select>
        </div>

        <div>
          <label htmlFor="viewAs" className="text-[#FF7B13] font-bold">
            View as:{" "}
          </label>
          <select
            id="viewAs"
            className="border py-2 px-3 text-[#34B701] bg-green-100  text-sm"
            onChange={handleViewChange}
          >
            <option value="gridView">Grid View</option>
            <option value="listView">List View</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterAsPrice;
