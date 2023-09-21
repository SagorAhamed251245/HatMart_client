import axios from "axios";

const setIpAddress = async (ip) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_APIS}/usersIp`,
      { ip: ip }
    );

    if (response.status === 200) {
      
    } else {
      console.error(
        "🚀 ~ file: setIpAddress.js:11 ~ setIpAddress ~ Error: Unexpected response status",
        response.status
      );
    }
  } catch (error) {
    console.error(
      "🚀 ~ file: setIpAddress.js:14 ~ setIpAddress ~ Error:",
      error
    );
  }
};

export default setIpAddress;
