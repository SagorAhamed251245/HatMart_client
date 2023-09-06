const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/product`, {
    cache: "no-cache",
  });
  return res.json();
};

export default getProducts;
