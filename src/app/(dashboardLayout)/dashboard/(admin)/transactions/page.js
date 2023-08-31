import Transaction from "@/components/Dashboard/Admin/Transactions/Transaction";
import React from "react";

const transactionsPage = () => {
  return (
    <section className=" mt-5 px-2">
      <h3 className="text-3xl font-bold mb-5 md:text-start text-center">
        Transactions
      </h3>
      <Transaction />
    </section>
  );
};

export default transactionsPage;
