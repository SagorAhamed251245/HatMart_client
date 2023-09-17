const getProductByText = async (text) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APIS}/productSearch/${text}`
  );
  return res.json();
};

export default getProductByText;
