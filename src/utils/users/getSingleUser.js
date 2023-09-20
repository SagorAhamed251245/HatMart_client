const getSingleUser = async (email) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/user/${email}`, {
    cache: "no-cache",
  });
  return res.json();
};

export default getSingleUser;
