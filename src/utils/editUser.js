const editUser = async (id, body) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIS}/updateUser/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", // Fixed the typo here
        },
        body: JSON.stringify(body),
      }
    );

    if (res.ok) {
      const responseJson = await res.json();
      console.log("Update user added:", responseJson);
    } else {
      console.log("Error:", res.statusText);
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

export default editUser;
