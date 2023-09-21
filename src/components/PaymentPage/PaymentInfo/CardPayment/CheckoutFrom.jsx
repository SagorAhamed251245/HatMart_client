import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import getUserData from "@/data/getUserData";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { deleteCartItems } from "@/utils/cart/cartFunctions";

const CheckoutForm = ({ price, allProducts, setIsOpen }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [orderProducts, setOrderProducts] = useState([]);
  const [transactionId, setTransactionId] = useState(null);
  const user = getUserData();
  const { replace, refresh } = useRouter();
  useEffect(() => {
    if (price > 0) {
      axios
        .post(`${process.env.NEXT_PUBLIC_APIS}/cartPayment`, { price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error("Error fetching clientSecret:", error);
        });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const number = event.target.number.value;

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "unknown",
              name: user?.displayName || "anonymous",
            },
          },
        });

      if (confirmError) {
        setCardError(confirmError.message);
      }

      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const orders = allProducts.map((product) => ({
          customerId: user._id,
          customerInfo: {
            name: user?.name,
            email: user?.email,
            number: number,
            address: user?.address,
          },
          productName: product.title,
          productId: product._id,
          productImage: product.image,
          productCategory: product.category,
          price: product.price,
          orderStatus: "pending",
          paymentStatus: "approved",
          quantity: product.quantity,
          paymentMethod: paymentMethod?.card?.brand,
          transactionId: paymentIntent.id,
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
                      transactionId: paymentIntent.id,
                      userId: user._id,
                      paymentMethod: paymentMethod?.card?.brand,
                      status: "approved",
                      totalPrice: price,
                    });
                    refresh();
                    replace("/");
                    deleteCartItems();
                    toast.success("product payment in successfully");
                    console.log(res);
                    setIsOpen(false);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            })();
          })
          .catch((err) => console.log(error));

        console.log(orders);
      }
    }
  };

  return (
    <div className="bg-white p-10 rounded-xl max-w-4xl w-full">
      <form onSubmit={handleSubmit}>
        <label htmlFor="number" className="text-gray-700  mb-1">
          Phone
        </label>
        <input
          id="number"
          name="number"
          minLength={11}
          maxLength={11}
          className=" mb-5 focus:outline-0  px-1.5 py-1  dark:bg-white dark:text-black border border-gray-300 rounded w-full"
          type="number"
          placeholder="e.g 01XXXXXXXXX"
          autoComplete="off"
          required
        />
        <label htmlFor="number" className="text-gray-700  mb-1">
          Card Details
        </label>
        <CardElement
          className="focus:outline-0  px-1.5 py-1  dark:bg-white dark:text-black border border-gray-300 rounded w-full"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && <p className="text-red-600 mt-1">{cardError}</p>}
        <div className="w-full flex justify-center mt-5">
          <button
            type="submit"
            className="bg-green-500 border-black text-white rounded-lg w-36 p-2 mt-5"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
