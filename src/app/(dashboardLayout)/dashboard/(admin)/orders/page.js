import Orders from "@/components/Dashboard/Admin/Orders/Orders";
import getOrders from "@/utils/getOrders";
import React from "react";

const ordersPage = async () => {
  const ordersData = await getOrders();
  return (
    <section className="mt-5 px-2">
      <h3 className="text-3xl font-bold mb-5 md:text-start text-center">
        Orders
      </h3>
      <Orders ordersData={ordersData} />
    </section>
  );
};

export default ordersPage;
