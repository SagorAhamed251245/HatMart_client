const getSingleProduct = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/productId/${id}`);
  return res.json();
};

export default getSingleProduct;
