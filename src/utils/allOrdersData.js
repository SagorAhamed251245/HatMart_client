const allOrdersData = async () => {
  const res = await fetch("/allOrders.json");
  return res.json();
};

export default allOrdersData;
