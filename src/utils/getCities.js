const getCities = async () => {
  const res = await fetch(`/cities.json`, {
    next: {
      revalidate: 3,
    },
  });
  return res.json();
};

export default getCities;
