const getUserById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/userId/${id}`);
  return res.json();
};

export default getUserById;
