import axios from 'axios';

const updateOrderStatus = async (id, body) => {
    return await axios.patch(`${process.env.NEXT_PUBLIC_APIS}/updateOrderStatus/${id}`,body)
};

export default updateOrderStatus;