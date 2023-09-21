const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/product`, {
    // next: {
    //   revalidate: 3,
    // },
    cache: "no-cache",
  });
  return res.json();
};

export default getProducts;
