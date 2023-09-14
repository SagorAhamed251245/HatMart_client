const getWishListByUserId = async (userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APIS}/wishListUserId/${userId}`,
    {
      cache: "no-cache",
    }
  );
  return res.json();
};

export default getWishListByUserId;
