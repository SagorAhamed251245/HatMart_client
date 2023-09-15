import React from "react";
import UserTableRow from "./UserTableRow";

const UserTable = ({ usersData }) => {
  return (
    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
      <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b-2 border-gray-300">
                #
              </th>
              <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b-2 border-gray-300">
                User
              </th>
              <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b-2 border-gray-300">
                Email
              </th>
              <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b-2 border-gray-300">
                Role
              </th>
              <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b-2 border-gray-300">
                Created at
              </th>
              <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b-2 border-gray-300">
                status
              </th>
              <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b-2 border-gray-300">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* user table row */}
            {usersData &&
              usersData.length > 0 &&
              usersData.map((userData, index) => (
                <UserTableRow
                  key={userData._id}
                  userData={userData}
                  index={index}
                />
              ))}
          </tbody>
        </table>
        {usersData.length == 0 && (
          <p className="text-center my-3 font-medium text-gray-600">
            No Data Found
          </p>
        )}
      </div>
    </div>
  );
};

export default UserTable;
