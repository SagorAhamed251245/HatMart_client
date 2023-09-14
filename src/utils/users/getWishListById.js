const getWishListById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/wishListId/${id}`, {
    cache: "no-cache",
  });
  return res.json();
};

export default getWishListById;
