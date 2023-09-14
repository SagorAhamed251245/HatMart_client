import axios from "axios";

const addWishList = async (body) => {
  await axios
    .post(`${process.env.NEXT_PUBLIC_APIS}/wishList`, body)
    .then((res) => {
      console.log("🚀 ~ file: addWishList.js:6 ~ awaitaxios.post ~ res:", res);
    })
    .catch((err) => {
      console.log("🚀 ~ file: addWishList.js:10 ~ .then ~ err:", err);
    });
};

export default addWishList;
