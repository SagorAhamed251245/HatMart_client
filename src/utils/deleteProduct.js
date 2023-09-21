import axios from "axios";

const deleteProduct = async (_id) => {
  return await axios.delete(`http://localhost:5000/api/v1/auth/deleteProduct/${_id}`);
};

export default deleteProduct;
