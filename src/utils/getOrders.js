const getOrders = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/orders`);
  return res.json();
};

export default getOrders;
