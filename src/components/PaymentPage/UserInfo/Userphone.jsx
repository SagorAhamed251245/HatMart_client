import React from "react";

const Userphone = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 mt-4">
        <div className="flex flex-col">
          <label htmlFor="inputField3" className="font-normal mb-1 pl-2">
            City
          </label>
          <input
            type="text"
            id="inputField3"
            className="border shadow-xl px-4 py-2 rounded-lg"
            placeholder="Enter city"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="inputField4" className="font-normal mb-1">
            Mobile
          </label>
          <input
            type="tell"
            id="inputField4"
            className="border shadow-xl px-4 py-2 rounded-lg"
            placeholder="+880"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="inputField4" className="font-normal mb-1">
            Zip
          </label>
          <input
            type="text"
            id="inputField4"
            className="border shadow-xl px-4 py-2 rounded-lg"
            placeholder="Zip"
          />
        </div>
      </div>
    </>
  );
};

export default Userphone;
