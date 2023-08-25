import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
const SubCategoryView = ({
  subCategory,
  setSubCategory,
  handleSubCategoryEdit,
  handleSubCategoryDelete,
}) => {
  const [edit, setEdit] = useState(false);
  const [editSubCategory, subEditSubCategory] = useState("");

  const handleEdit = (event, index) => {
    event.preventDefault();
    subEditSubCategory(e.target.value);
    setSubCategory(
      subCategory.filter((category, i) =>
        i === index ? editSubCategory : category
      )
    );
    setEdit(false);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {/* Display input values */}
      {subCategory.map((value, index) => (
        <div
          className="flex justify-between items-center py-1 border border-gray-200 rounded shadow-md px-2 bg-green-100"
          key={index}
        >
          <div className="text-gray-600 w-[80%] text-sm overflow-hidden flex">
            <span className="mr-1">{index + 1}.</span>
            <div className="flex justify-between items-center ">
              {edit ? (
                <input
                  ref={inputRef}
                  className="input input-xs ml-1 border border-green-300 rounded focus:outline-0 focus:border-green-500"
                  defaultValue={value}
                  onBlur={handleEdit}
                />
              ) : (
                <span>{value}</span>
              )}
            </div>
          </div>
          <p className="flex items-center gap-4">
            <span
              onClick={() => {
                setEdit(!edit);
              }}
              className="text-blue-500 tooltip tooltip-top cursor-pointer"
              data-tip="Edit"
            >
              <AiFillEdit size={20} onClick={() => handleSubCategoryEdit} />
            </span>
            <span
              className="text-red-500 cursor-pointer tooltip tooltip-top"
              data-tip="Delete"
            >
              <AiFillDelete
                size={20}
                onClick={() => handleSubCategoryDelete(index)}
              />
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default SubCategoryView;
