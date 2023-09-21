"use client";
import ModalPayment from "@/components/Ui/ModalPayment";
import getUserData from "@/data/getUserData";
import currencyConverter from "@/utils/currency/currencyConverter";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const NagadModal = ({ isOpen, setIsOpen, totalAmount, allProducts }) => {
  const user = getUserData();
  const { replace, refresh } = useRouter();
  const [toPayInBDT, setToPayInBDT] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (totalAmount) {
    (async () => {
      await currencyConverter(totalAmount)
        .then((data) => {
          if (data?.success) {
            setToPayInBDT(data.result);
          } else if (data?.message) {
            setToPayInBDT(110 * totalAmount);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setToPayInBDT(110 * totalAmount);
        });
    })();
  }

  const onSubmit = async (data) => {
    const generateRandomId = () => {
      const min = 10000000;
      const max = 99999999;
      const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomId.toString();
    };

    const trxId = generateRandomId();

    const orders = allProducts.map((product) => ({
      customerId: user._id,
      customerInfo: {
        name: user.name,
        email: user.email,
        number: data.number,
        address: user.address,
      },
      BDT: toPayInBDT,
      productName: product.title,
      productId: product._id,
      productImage: product.image,
      productCategory: product.category,
      price: product.price,
      orderStatus: "pending",
      paymentStatus: "approved",
      quantity: product.quantity,
      paymentMethod: "nagad",
      transactionId: trxId,
    }));
    await axios
      .post(`${process.env.NEXT_PUBLIC_APIS}/orders/multi`, orders)
      .then((res) => {
        (async () => {
          for (const product of allProducts) {
            await axios
              .patch(
                `${process.env.NEXT_PUBLIC_APIS}/updateProduct/${product?._id}`,
                {
                  estimateSells: product?.estimateSells
                    ? product?.estimateSells + product?.quantity
                    : product?.quantity,
                  stock_quantity: product?.stock_quantity
                    ? product?.stock_quantity - product?.quantity
                    : 0,
                }
              )
              .then((res) => {
                axios.post(`${process.env.NEXT_PUBLIC_APIS}/transaction`, {
                  transactionId: trxId,
                  userId: user._id,
                  paymentMethod: "bkash",
                  status: "approved",
                  totalPrice: totalAmount,
                });
                reset();
                setIsOpen(false);
                refresh();
                replace("/");
                toast.success("product payment in successfully");
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })();
      })
      .catch((err) => console.log(err));
  };
  return (
    <ModalPayment isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="bg-cover bg-no-repea bg-[url('https://i.ibb.co/nrbD8X0/image.png')] rounded-xl py-10">
        <h3 className="text-center font-bold text-[#ccc] mx-auto">
          Save Your Nagad Account for Future Payments
        </h3>
        <div className="text-center">
          <div className="mb-2 mt-8">
            <Image
              className="mx-auto w-fit h-16"
              src="https://i.ibb.co/RDJN7mN/image.png"
              alt="nagad-logo"
              width={300}
              height={80}
            />
          </div>
          <p className="font-bold text-[#ccc]">HatMart LTD.</p>
        </div>
        <div className="text-center mt-14">
          <p className="font-bold text-[#ccc] mb-2">
            {parseFloat(toPayInBDT).toFixed(2)} &#2547;
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center mt-14">
            <p className="font-bold text-[#ccc] mb-2">
              Your Nagad Account Number
            </p>
            <input
              {...register("number", {
                required: true,
                minLength: 11,
                maxLength: 11,
              })}
              className="w-[90%] mx-auto focus:outline-0 text-center px-1.5 py-1 focus:shadow-blue-300 focus:shadow-inner dark:bg-white dark:text-black"
              type="number"
              placeholder="e.g 01XXXXXXXXX"
              autoComplete="off"
              required
            />
            {errors.number?.type === "required" && (
              <span className="label-text-alt text-white">
                This field is required.
              </span>
            )}
            {errors.number?.type === "minLength" && (
              <span className="label-text-alt text-white">
                Number must be exactly 11 characters long.
              </span>
            )}
            {errors.number?.type === "maxLength" && (
              <span className="label-text-alt text-white">
                Number must be exactly 11 characters long.
              </span>
            )}
          </div>
          <div className="text-center mt-20">
            <p className="text-xs text-[#ccc] ">
              By clicking/tapping "Proceed" you are agreeing to our{" "}
              <span className="font-bold link-hover cursor-pointer">
                Terms and Conditions
              </span>
            </p>

            <div className="flex justify-center gap-2 mt-4">
              <button
                type="submit"
                className="px-1.5 w-20 text-sm font-bold py-px  border border-white hover:text-white bg-white text-red-500 rounded hover:bg-[#9F0A0A] duration-200"
              >
                Proceed
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-1.5 w-20 text-sm font-bold py-px border border-white hover:text-white bg-white text-red-500 rounded hover:bg-[#9F0A0A] duration-200"
              >
                Close
              </button>
            </div>
            <div className=" mt-5">
              <Image
                className="mx-auto w-fit h-16"
                src="https://i.ibb.co/yQgmLDm/image.png"
                alt="nagad-logo"
                width={300}
                height={80}
              />
            </div>
          </div>
        </form>
      </div>{" "}
    </ModalPayment>
  );
};

export default NagadModal;
