"use client";
import getCities from "@/utils/getCities";
import { useEffect, useState } from "react";

const FIlterLocalProduct = ({ setLocation }) => {
  const [cities, setCities] = useState([]);
  const [districts, setDistrict] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCities();
      setCities(data);
    })();
  }, []);
  useEffect(() => {
    const district = cities.flatMap((item) => item?.districts);
    setDistrict(district);
  }, [cities]);

  const handleLocationChange = (event) => {
    const newSortOrder = event.target.value;
    setLocation(newSortOrder);
  };

  return (
    <>
      <div className="mt-5 w-full flex justify-end gap-5">
        <div>
          <label htmlFor="cities" className="text-[#FF7B13] font-bold">
            Cities:{" "}
          </label>
          <select
            id="cities"
            className="border py-2 px-3 dark:text-green-500  ml-2 text-sm"
            onChange={handleLocationChange}
          >
            {cities.map((city, index) => (
              <>
                <option key={index} value={city?.name}>
                  {city?.name}
                </option>
              </>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="districts" className="text-[#FF7B13] font-bold">
            Districts:{" "}
          </label>
          <select
            id="districts"
            className="border py-2 px-3 dark:text-green-500 ml-2  text-sm"
            onChange={handleLocationChange}
          >
            {districts.map((district, index) => (
              <>
                <option key={index} value={district}>
                  {district}
                </option>
              </>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default FIlterLocalProduct;
