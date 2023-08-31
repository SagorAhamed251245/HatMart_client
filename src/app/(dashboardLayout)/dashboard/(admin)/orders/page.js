import Orders from "@/components/Dashboard/Admin/Orders/Orders";
import React from "react";

const ordersPage = async () => {
  return (
    <section className="mt-5 px-2">
      <h3 className="text-3xl font-bold mb-5 md:text-start text-center">
        Orders
      </h3>
      <Orders />
    </section>
  );
};

export default ordersPage;
