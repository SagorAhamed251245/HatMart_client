import axios from "axios";

const deleteCoupon = async (id) => {
  return await axios.delete(`${process.env.NEXT_PUBLIC_APIS}/coupon/${id}`)
};

export default deleteCoupon;
