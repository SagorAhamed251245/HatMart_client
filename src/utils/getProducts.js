const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/product`, {
    next: {
      revalidate: 3,
    },
  });
  return res.json();
};

export default getProducts;
