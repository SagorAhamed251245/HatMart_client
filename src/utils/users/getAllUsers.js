const getAllUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/users`, {
    cache: "no-cache",
  });
  return res.json();
};

export default getAllUsers;
