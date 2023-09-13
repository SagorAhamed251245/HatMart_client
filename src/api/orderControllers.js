import Stripe from "stripe";
const stripe = new Stripe(process.env.PRIVATE_KEY);

export const checkoutSession = async (req, res) => {
  console.log("clicked");
  const body = req.body;
  console.log(body);

  const line_items = body?.items?.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.image],
          metadata: { productId: item._id },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });

  const shippingInfo = body?.shippingInfo;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    success_url: `http://localhost:5000/api/v1/auth/?order_success=true`,
    cancel_url: `http://localhost:5000/api/v1/auth`,
    customer_email: req?.user?.email,
    client_reference_id: req?.user?._id,
    mode: "payment",
    metadata: { shippingInfo },
    shipping_options: [
      {
        shipping_rate: "shr_1Np5IPJHKCQ45FlfmixhbkE4",
      },
    ],
    line_items,
  });

  res.status(200).json({
    url: session.url,
  });
};
