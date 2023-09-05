const getCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/category`, {
    cache: "force-cache",
  });
  return res.json();
};

export default getCategories;
