const getMyOrders = async (userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APIS}/ordersCustomerId/${userId}`,
    {
      cache: "no-cache",
    }
  );
  return res.json();
};

export default getMyOrders;
