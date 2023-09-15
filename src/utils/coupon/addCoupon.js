import axios from "axios";

const addCoupon = async (body) => {
  await axios
    .post(`${process.env.NEXT_PUBLIC_APIS}/addCoupon`, body)
    .then((res) => {
      console.log("🚀 ~ file: addCoupon.js:9 ~ .then ~ res:", res);
    })
    .catch((err) => {
      console.log("🚀 ~ file: addCoupon.js:13 ~ addCoupon ~ err:", err);
    });
};

export default addCoupon;
