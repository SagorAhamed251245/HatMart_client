const getBannerByType = async (type) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/allBanner/${type}`);
  return res.json();
};

export default getBannerByType;
