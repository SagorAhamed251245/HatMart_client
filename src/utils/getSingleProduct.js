const getSingleProduct = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/product/${id}`);
  return res.json();
};

export default getSingleProduct;
