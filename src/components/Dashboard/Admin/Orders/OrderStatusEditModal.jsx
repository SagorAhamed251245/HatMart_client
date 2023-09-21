import ModalPayment from "@/components/Ui/ModalPayment";
import updateOrderStatus from "@/utils/updateOrderStatus";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

const OrderStatusEditModal = ({ isOpen, setIsOpen, Status, id }) => {
  const { refresh } = useRouter();
  // change user role
  const handleOrderStatus = async (id, status) => {
    console.log(id, status);
    if (id && status) {
      await updateOrderStatus(id, {orderStatus : status})
        .then((res) => {
          console.log(
            "🚀 ~ file: OrderStatusEditModal.jsx:22 ~ handleOrderStatus ~ handleOrderStatus.res:",
            res
          );
          toast.success("Status updated.");
        })
        .catch((err) => {
          console.error(err);
          toast.error("Status error.");
        });
      refresh();
    }
    setIsOpen(false);
  };
  return (
    <ModalPayment isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="bg-white p-4 max-w-md rounded-xl relative">
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 absolute top-3 right-4 text-xl font-medium hover:text-gray-500/75 duration-200 hover:bg-gray-200 hover:rounded-full hover:shadow-2xl"
        >
          <RxCross2 size={24} />
        </button>

        <div className="mb-3">
          <h3 className="text-xl font-semibold mb-4 ">Change Status</h3>

          <div className="flex justify-center items-center gap-5">
            <button
              onClick={() => handleOrderStatus(id, "canceled")}
              disabled={Status === "canceled"}
              className="font-medium w-36 text-center bg-[#A4EEBF] hover:bg-[#89ffb4] duration-200 px-3 py-1.5 rounded-3xl disabled:bg-gray-300 text-[#ff6347cc] shadow-lg  disabled:text-white disable:text-gray-700 disabled:cursor-not-allowed"
            >
              canceled
            </button>
            <button
              onClick={() => handleOrderStatus(id, "completed")}
              disabled={Status === "completed"}
              className="font-medium w-36 text-center bg-[#C2F7D5] hover:bg-[#a7fac5] duration-200 px-3 py-1.5 rounded-3xl disabled:bg-gray-300 text-black shadow-lg   disable:text-black disabled:cursor-not-allowed"
            >
              completed
            </button>
          </div>
        </div>
      </div>
    </ModalPayment>
  );
};

export default OrderStatusEditModal;
