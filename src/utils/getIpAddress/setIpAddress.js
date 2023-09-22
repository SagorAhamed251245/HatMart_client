import axios from "axios";

const setIpAddress = async (ip) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_APIS}/usersIp`,
      { ip: ip }
    );

    if (response.status === 200) {
    } else {
      return;
    }
  } catch (error) {}
};

export default setIpAddress;
