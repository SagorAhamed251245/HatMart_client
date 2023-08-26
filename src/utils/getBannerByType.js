const getBannerByType = async (type) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/allBanner/${type}`);
  return res.json();
};

export default getBannerByType;
