const getSingleUser = async (email) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/user/${email}`, {
    cache: "force-cache",
  });
  return res.json();
};

export default getSingleUser;
