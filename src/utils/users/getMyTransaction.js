const getMyTransaction = async (userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APIS}/userTransaction/${userId}`,
    {
      cache: "no-cache",
    }
  );
  return res.json();
};

export default getMyTransaction;
