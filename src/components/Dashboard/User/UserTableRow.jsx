import Image from "next/image";
import React, { useState } from "react";
import UserRoleEditModal from "./UserRoleEditModal";

const UserTableRow = ({ userData, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { _id, name, email, role, image, createdAt } = userData || {};
  return (
    <>
      <tr>
        <td className="px-5 py-4 text-sm bg-white dark:bg-transparent dark:text-gray-200 border-b border-gray-300">
          <p className="text-gray-600 dark:text-white whitespace-no-wrap">
            {index + 1}
          </p>
        </td>
        <td className="px-5 py-4 text-sm bg-white dark:bg-transparent dark:text-gray-200 border-b border-gray-300">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                alt="profile"
                src={image}
                width="40"
                height="40"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </div>
            <div className="ml-3">
              <p className="text-gray-600 dark:text-white whitespace-no-wrap">
                {name}
              </p>
            </div>
          </div>
        </td>
        <td className="px-5 py-4 text-sm bg-white dark:bg-transparent dark:text-gray-200 border-b border-gray-300">
          <p className="text-gray-600 dark:text-white whitespace-no-wrap ml-2">
            {email}
          </p>
        </td>

        <td className="px-5 py-4 text-sm bg-white dark:bg-transparent dark:text-gray-200 border-b border-gray-300 shadow-lg">
          <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-gray-700">
            <span
              aria-hidden="true"
              className={`absolute inset-0 ${
                role == "admin"
                  ? "bg-green-400 dark:bg-green-500"
                  : "bg-green-300 dark:bg-green-400"
              } bg-green-300 rounded-full opacity-50`}
            ></span>
            <span className="relative">
              {role == "admin" ? (
                <span className="text-[#FF7B13] ">{role}</span>
              ) : (
                <span className="dark:text-gray-100">{role}</span>
              )}
            </span>
          </span>
        </td>
        <td className="px-5 py-4 text-sm bg-white dark:bg-transparent dark:text-gray-200 border-b border-gray-300">
          <p className="text-gray-600 dark:text-white whitespace-no-wrap">
            {new Date(createdAt).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }) +
              ", " +
              new Date(createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              })}
          </p>
        </td>
        <td className="px-5 py-4 text-sm bg-white dark:bg-transparent dark:text-gray-200 border-b border-gray-300">
          <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-700 dark:text-white">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-green-100 dark:bg-white rounded-full opacity-50 shadow-lg"
            ></span>
            <span className="relative">active</span>
          </span>
        </td>
        <td className="px-5 py-4 text-sm bg-white dark:bg-transparent dark:text-gray-200 border-b border-gray-300">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-indigo-600 dark:text-blue-400 hover:text-indigo-900"
            title="Change role"
          >
            Edit
          </button>
        </td>
      </tr>
      <UserRoleEditModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        role={role}
        id={_id}
      />
    </>
  );
};

export default UserTableRow;
