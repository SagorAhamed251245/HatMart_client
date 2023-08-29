import Orders from "@/components/Dashboard/Admin/Orders/Orders";
import React from "react";

const ordersPage = async () => {
  return (
    <section className="px-4 mx-auto sm:px-8 mt-5">
      <h3 className="text-3xl font-bold mb-5">Orders</h3>
      <Orders />
    </section>
  );
};

export default ordersPage;
