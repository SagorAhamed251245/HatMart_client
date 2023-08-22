const getProducts = async () => {
  const res = await fetch(
    "https://hatmart-server.vercel.app/api/v1/auth/product"
  );
  return res.json();
};

export default getProducts;