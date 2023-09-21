import axios from "axios";

const expiredCoupon = async (body) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_APIS}/expiredCoupon`, body)
};

export default expiredCoupon;
