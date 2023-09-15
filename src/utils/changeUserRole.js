const changeUserRole = async (id, role) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIS}/changeUserRole/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(role),
      }
    );

    const responseJson = await res.json();
    return responseJson;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default changeUserRole;
