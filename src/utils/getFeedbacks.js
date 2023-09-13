const getFeedbacks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/reviews`);
  return res.json();
};

export default getFeedbacks;
