import axios from "axios";
import toast from "react-hot-toast";

const addCoupon = async (couponData) => {
  await axios
    .post(`${process.env.NEXT_PUBLIC_APIS}/coupon`, couponData)
    .then((res) => {
     
      if (res.ok) {
        toast("succesfully coupon added");
      }
    })
    .catch((err) => {
      console.log("🚀 ~ file: addCoupon.js:10 ~ .then ~ err:", err);
    });
};

export default addCoupon;
