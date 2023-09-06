const getCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/category`, {
    cache: "no-cache",
  });
  return res.json();
};

export default getCategories;
