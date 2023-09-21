const postUser = async (userData) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_APIS}/users`;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (response.status === 200) {
    const responseJson = await response.json();
    toast.success("product is added");
  } else {
    console.log("Error:", response.statusText);
  }
};

export default postUser;
