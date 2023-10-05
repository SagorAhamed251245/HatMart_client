"use client";
import useAuth from "@/hooks/useAuth";
import { BiTrashAlt } from "react-icons/bi";

const CartCardDeleteButton = ({ _id, deleteCartItem, total }) => {
  const { cartDelateHook } = useAuth();
  return (
    <button
      onClick={() => {
        deleteCartItem(_id, total);
        cartDelateHook();
      }}
      className="bg-[#FF7218] hover:bg-red-400 active:bg-red-600 text-white p-3 text-2xl h-fit rounded-full my-auto"
    >
      <BiTrashAlt />
    </button>
  );
};

export default CartCardDeleteButton;
