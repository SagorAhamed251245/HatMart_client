const getSingleProduct = async (id) => {
  const res = await fetch(
    `https://hatmart-server.vercel.app/api/v1/auth/product/${id}`
  );
  return res.json();
};

export default getSingleProduct;
