const getTransactions = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/transaction`);
  return res.json();
};

export default getTransactions;
