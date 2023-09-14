import ModalPayment from "@/components/Ui/ModalPayment";
import React from "react";

const UserRoleEditModal = ({ isOpen, setIsOpen, role }) => {
  return (
    <ModalPayment isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="bg-white p-4 max-w-md rounded-xl relative">
        <button
          onClick={() => setIsOpen(false)}
          className="text-red-400 absolute top-2 right-2 text-xl font-medium hover:text-red-500/75 duration-200"
        >
          X
        </button>

        <div className="">
          <h3 className="text-2xl font-semibold mb-3 ">Edit role</h3>

          <div className="flex justify-center items-center gap-5">
            <button
              disabled={role === "admin"}
              className="font-medium w-36 text-center bg-[#A4EEBF] px-3 py-1.5 rounded-3xl disabled:bg-gray-300 text-[#ff6347cc] shadow-lg  disabled:text-white disable:text-gray-700 disabled:cursor-not-allowed"
            >
              Admin
            </button>
            <button
              disabled={role === "user"}
              className="font-medium w-36 text-center bg-[#C2F7D5] px-3 py-1.5 rounded-3xl disabled:bg-gray-300 text-black shadow-lg   disable:text-black disabled:cursor-not-allowed"
            >
              User
            </button>
          </div>
        </div>
      </div>
    </ModalPayment>
  );
};

export default UserRoleEditModal;
