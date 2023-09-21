import axios from "axios";

const addCoupon = async (body) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_APIS}/coupon`, body)
    
};

export default addCoupon;
