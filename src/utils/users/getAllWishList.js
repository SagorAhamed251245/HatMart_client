const getAllWishList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/wishList`, {
    cache: "no-cache",
  });
  return res.json();
};

export default getAllWishList;
