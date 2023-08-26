const getCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/category`);
  return res.json();
};

export default getCategories;
