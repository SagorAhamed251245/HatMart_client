import getUserData from "@/data/getUserData";
import addWishList from "@/utils/users/addWishList";
import getWishListByUserId from "@/utils/users/getWishListByUserId";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const WishListBtn = ({ product_id }) => {
  const user = getUserData();
  console.log("🚀 ~ file: WishListBtn.jsx:10 ~ WishListBtn ~ user:", user);

  const [isWishListAdded, setWishListAdded] = useState(false);

  const handleWishList = async (product_id) => {
    console.log(product_id);
    const wishListBody = {
      userId: user?._id,
      productId: product_id,
    };

    if (product_id && user?._id) {
      await addWishList(wishListBody);
    } else {
      console.log("invalid data");
    }
  };
  useEffect(() => {
    (async () => {
      const userWishList = await getWishListByUserId(user?._id);

      if (product_id) {
        const isProductInWishlist = userWishList.some(
          (wishList) => wishList?.productId === product_id
        );
        setWishListAdded(isProductInWishlist);
      } else {
        console.log("no product is is found");
      }
    })();
  }, [user?._id, product_id, isWishListAdded]);

  return (
    <Link href={""} scroll={false}>
      <AiFillHeart
        onClick={() => handleWishList(product_id)}
        className={`absolute z-20 text-xl top-0 right-0 ${!user && "hidden"} ${
          isWishListAdded ? "text-red-400" : ""
        }`}
      />
    </Link>
  );
};

export default WishListBtn;
