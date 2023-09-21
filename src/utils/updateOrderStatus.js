import axios from 'axios';

const updateOrderStatus = async (id, body) => {
    return await axios.patch(`http://localhost:5000/api/v1/auth/updateOrderStatus/${id}`,body)
};

export default updateOrderStatus;