import Transaction from "@/components/Dashboard/Admin/Transactions/Transaction";
import getOrders from "@/utils/getOrders";
import React from "react";

const transactionsPage = async () => {
  const transactionsData = await getOrders();
  return (
    <section className=" mt-5 px-2">
      <h3 className="text-3xl font-bold mb-5 md:text-start text-center">
        Transactions
      </h3>
      <Transaction transactionsData={transactionsData} />
    </section>
  );
};

export default transactionsPage;
