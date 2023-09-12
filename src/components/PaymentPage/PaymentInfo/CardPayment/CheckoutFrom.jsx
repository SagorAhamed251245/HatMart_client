import getUserData from "@/data/getUserData";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";

const CheckoutFrom = ({ price, allProducts }) => {
  console.log("🚀 ~ file: CheckoutFrom.jsx:5 ~ CheckoutFrom ~ price :", price);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [orderProducts, setOrderProducts] = useState([]);
  console.log(allProducts);

  const user = getUserData();
  console.log("🚀 ~ file: CheckoutFrom.jsx:13 ~ CheckoutFrom ~ user:", user);

  useEffect(() => {
    allProducts.map((product) =>
      setOrderProducts(...orderProducts, {
        customerName: user?.name,
        customerId: user?._id,
        customerEmail: user?.email,
        productName: product?.title,
        productId: product?._id,
        productImage: product?.image,
        productCategory: product?.category,
        price: product?.price,
        orderStatus: "approved",
        quantity: product?.quantity,
      })
    );
  }, [allProducts]);

  useEffect(() => {
    if (price > 0) {
      axios
        .post(`${process.env.NEXT_PUBLIC_APIS}/cartPayment`, { price })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price]);
  const handleSubmit = async (event) => {
    // Block native form submission.

    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log("🚀 ~ file: CheckoutFrom.jsx:20 ~ handleSubmit ~ card:", card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
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
      setCardError(confirmError);
    }
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent.id);
      const payment = { transactionId: paymentIntent.id };
      console.log(payment);
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
            className="bg-pink-500 border-black text-white rounded-lg w-36 p-2 mt-5 "
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError.message}</p>}
    </>
  );
};

export default CheckoutFrom;
