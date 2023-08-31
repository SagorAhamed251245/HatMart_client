const getReviews = async (productId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APIS}/reviews/${productId}`
  );
  return res.json();
};

export default getReviews;
