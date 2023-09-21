const getIpAddress = async () => {
  try {
    const response = await fetch("https://ipinfo.io/json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.ip;
  } catch (error) {
    
    return null;
  }
};

export default getIpAddress;
