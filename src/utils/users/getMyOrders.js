const getMyOrders = async (userId) => {
  if (userId !== undefined) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIS}/ordersCustomerId/${userId}`,
      {
        cache: "no-cache",
      }
    );
    return res.json();
  } else {
    console.log("userId id is not fide on getMyOrders");
  }
};

export default getMyOrders;
