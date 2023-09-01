import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const SubCategoryView = ({ subCategory, setSubCategory }) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [editSubCategory, setEditSubCategory] = useState("");
  const inputRefs = useRef([]);

  const handleSubCategoryDelete = (index) => {
    setSubCategory(subCategory.filter((_, i) => i !== index));
    if (editIndex === index) {
      setEditIndex(-1);
      setEditSubCategory("");
    }
  };

  const handleSubCategoryEdit = (index) => {
    setEditSubCategory(subCategory[index]);
    setEditIndex(index);
  };

  const handleSubCategorySave = (index) => {
    const updatedSubCategory = [...subCategory];
    updatedSubCategory[index] = editSubCategory;
    setSubCategory(updatedSubCategory);
    setEditIndex(-1);
  };

  useEffect(() => {
    if (editIndex !== -1) {
      inputRefs.current[editIndex].focus();
    }
  }, [editIndex]);

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {subCategory.map((value, index) => (
        <div
          className="flex justify-between items-center py-1 border border-gray-200 rounded shadow-md px-2 bg-green-100"
          key={index}
        >
          <div className="text-gray-600 w-[80%] text-sm overflow-hidden flex">
            <span className="mr-1">{index + 1}.</span>
            <div className="flex justify-between items-center">
              {editIndex === index ? (
                <input
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="input input-xs ml-1 border border-green-300 rounded focus:outline-0 focus:border-green-500"
                  value={editSubCategory}
                  onChange={(event) => setEditSubCategory(event.target.value)}
                  onBlur={() => handleSubCategorySave(index)}
                />
              ) : (
                <span>{value}</span>
              )}
            </div>
          </div>
          <p className="flex items-center gap-2 ml-1">
            <span
              onClick={() => handleSubCategoryEdit(index)}
              className="text-blue-500 tooltip tooltip-top cursor-pointer"
              data-tip="Edit"
            >
              <AiFillEdit size={20} />
            </span>
            <span
              onClick={() => handleSubCategoryDelete(index)}
              className="text-red-500 cursor-pointer tooltip tooltip-top"
              data-tip="Delete"
            >
              <AiFillDelete size={20} />
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default SubCategoryView;
