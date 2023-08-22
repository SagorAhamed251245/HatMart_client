const getSingleProduct = async (id) => {
  const res = await fetch(
    `https://hatmart-server.vercel.app/api/v1/auth/product/64de02f1272ee7f4d08c1f7f`
  );
  return res.json();
};

export default getSingleProduct;
