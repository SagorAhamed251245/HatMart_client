const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/product`);
  return res.json();
};

export default getProducts;
