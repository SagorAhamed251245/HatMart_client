import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import getUserData from "@/data/getUserData";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CheckoutForm = ({ price, allProducts }) => {
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
          customerName: user.name,
          customerId: user._id,
          customerEmail: user.email,
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
                    toast.success("product payment in successfully");
                    console.log(res);
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
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
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
        <div className="w-full flex justify-center mt-5">
          <button
            type="submit"
            className="bg-pink-500 border-black text-white rounded-lg w-36 p-2 mt-5"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
