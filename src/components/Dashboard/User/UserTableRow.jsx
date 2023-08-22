import Image from "next/image";
import React from "react";

const UserTableRow = ({ userData, index }) => {
  const { name, email, role, image, createdAt } = userData || {};
  return (
    <tr>
      <td className="px-5 py-4 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-600 whitespace-no-wrap">{index + 1}</p>
      </td>
      <td className="px-5 py-4 text-sm bg-white border-b border-gray-300">
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
            <p className="text-gray-600 whitespace-no-wrap">{name}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-4 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-600 whitespace-no-wrap">{email}</p>
      </td>

      <td className="px-5 py-4 text-sm bg-white border-b border-gray-300 shadow-lg">
        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-gray-700">
          <span
            aria-hidden="true"
            className={`absolute inset-0 ${
              role == "admin" ? "bg-green-400" : "bg-green-300"
            } bg-green-300 rounded-full opacity-50`}
          ></span>
          <span className="relative">
            {role == "admin" ? (
              <span className="text-[#FF7B13] ">{role}</span>
            ) : (
              <span>{role}</span>
            )}
          </span>
        </span>
      </td>
      <td className="px-5 py-4 text-sm bg-white border-b border-gray-300">
        <p className="text-gray-600 whitespace-no-wrap">
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
      <td className="px-5 py-4 text-sm bg-white border-b border-gray-300">
        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-700">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-100 rounded-full opacity-50 shadow-lg"
          ></span>
          <span className="relative">active</span>
        </span>
      </td>
      <td className="px-5 py-4 text-sm bg-white border-b border-gray-300">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default UserTableRow;
