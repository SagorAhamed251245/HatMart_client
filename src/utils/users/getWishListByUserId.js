const getWishListByUserId = async (userId) => {
  if (userId) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIS}/wishListUserId/${userId}`,
      {
        cache: "force-cache",
      }
    );
    return res.json();
  } else {
    return;
  }
};

export default getWishListByUserId;
