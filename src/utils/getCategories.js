const getCategories = async () => {
  const res = await fetch(
    "https://hatmart-server.vercel.app/api/v1/auth/category"
  );
  return res.json();
};

export default getCategories;
