const getAllUsers = async () => {
  const res = await fetch(
    "https://hatmart-server.vercel.app/api/v1/auth/users"
  );
  return res.json();
};

export default getAllUsers;
