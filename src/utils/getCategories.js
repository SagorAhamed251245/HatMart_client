const getCategories = async () => {
  const res = await fetch("http://localhost:500/categories");
  const categoriesData = await res.json();
  return categoriesData;
};

export default getCategories;
console.log(getCategories);
