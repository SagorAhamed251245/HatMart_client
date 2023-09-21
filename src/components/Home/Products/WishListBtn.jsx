import getUserData from "@/data/getUserData";
import addWishList from "@/utils/users/addWishList";
import getWishListByUserId from "@/utils/users/getWishListByUserId";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const WishListBtn = ({ product_id, product }) => {
  const user = getUserData();
  const [isWishListAdded, setWishListAdded] = useState(false);
  const [isAdded, setAdded] = useState(false);
  const { title, price, category, image } = product;
  const handleWishList = async (productId) => {
    const wishListBody = {
      userId: user?._id,
      productId: productId,
      category: category,
      price: price,
      productName: title,
      productImage: image,
    };

    if (productId && user?._id) {
      setAdded(true);
      await addWishList(wishListBody);
    } else {
      console.log("invalid data");
    }
  };

  useEffect(() => {
    if (!user) {
      return; // Don't perform any effect if user is not defined.
    }

    (async () => {
      if (!user?._id) {
        return; // Don't perform any effect if user
      } else {
        const userWishList = await getWishListByUserId(user?._id);

        if (product_id) {
          const isProductInWishlist = userWishList.some(
            (wishList) => wishList?.productId === product_id
          );

          setWishListAdded(isProductInWishlist);
        } else {
          console.log("no product is found");
        }
      }
    })();
  }, [user, product_id, isWishListAdded]);

  return (
    <>
      <button disabled={isWishListAdded}>
        <AiFillHeart
          onClick={() => handleWishList(product_id)}
          className={`absolute z-20 text-xl top-3 right-3 ${
            !user && "hidden"
          } ${isWishListAdded ? "text-red-400 cursor-not-allowed" : ""}`}
        />
      </button>
      <button disabled={isWishListAdded}>
        <AiFillHeart
          onClick={() => handleWishList(product_id)}
          className={`absolute z-20 text-xl top-3 right-3 ${
            !user && "hidden"
          } ${isAdded ? "text-red-400" : "hidden"}`}
        />
      </button>
    </>
  );
};

export default WishListBtn;
