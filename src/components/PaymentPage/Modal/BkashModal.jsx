import ModalPayment from "@/components/Ui/ModalPayment";
import getUserData from "@/data/getUserData";
import { deleteCartItems } from "@/utils/cart/cartFunctions";
import currencyConverter from "@/utils/currency/currencyConverter";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BkashModal = ({ isOpen, setIsOpen, totalAmount, allProducts }) => {
  const user = getUserData();
  const { replace, refresh } = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [toPayInBDT, setToPayInBDT] = useState(0);
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
      paymentMethod: "bkash",
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
                deleteCartItems();
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
      <div className="max-w-xl mt-5 bg-white p-4 rounded-xl">
        <div className="w-full my-5">
          <Image
            className="mx-auto"
            src="https://i.ibb.co/h20fyrf/image.png"
            alt="bkash-image"
            width={300}
            height={80}
          />
        </div>
        <div className="border border-b-8 w-full border-[#EC0A7D]"></div>
        <div className="flex justify-between gap-4 p-4 ">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 border border-gray-300 rounded-full">
              <Image
                src="https://i.ibb.co/TBjb8K5/image.png"
                width={32}
                height={32}
                alt="cart"
              />
            </div>
            <div className="w-56">
              <p className="text-xs mb-1">TestCheckoutDemoMerchant1 </p>
              <p className="text-xs">Invoice: rBZpTwzvK3I</p>
            </div>
          </div>
          <p className="text-xl font-medium">
            {parseFloat(toPayInBDT).toFixed(2)} &#2547;
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-[url('https://i.ibb.co/8K2r6x3/image.png')] h-44">
            <div className="flex h-full w-full flex-col justify-center items-center ">
              <div className="text-center">
                <p className="text-xs mb-4 text-white">
                  Your bKash Account number
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

                <p className="text-xs text-white mt-3">
                  By clicking on <span className="font-semibold">Confirm</span>,
                  you are agreeing to the{" "}
                  <span className="font-semibold underline">
                    terms & conditions
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-[#d1d3d4] w-full">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="uppercase text-sm font-semibold text-gray-50 w-full text-center py-2 border-r-2 border-gray-400"
            >
              Close
            </button>
            <button
              type="submit"
              className="text-gray-500 text-sm font-semibold uppercase w-full text-center py-2"
            >
              Confirm
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center py-2">
          <div className="flex justify-center items-center bg-[#EC0A7D] rounded-full h-6 w-6">
            <Image
              src="https://i.ibb.co/ZL2hrXH/image.png"
              height={10}
              width={10}
              alt="phone image"
            />
          </div>
          <p className="text-[#EC0A7D] font-semibold ml-2.5">16247</p>
        </div>
      </div>
    </ModalPayment>
  );
};

export default BkashModal;
