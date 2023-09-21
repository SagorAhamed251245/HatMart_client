import axios from "axios";

const deleteProduct = async (_id) => {
  return await axios.delete(`${process.env.NEXT_PUBLIC_APIS}/deleteProduct/${_id}`);
};

export default deleteProduct;
