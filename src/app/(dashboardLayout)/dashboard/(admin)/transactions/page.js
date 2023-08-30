import Transaction from "@/components/Dashboard/Admin/Transactions/Transaction";
import React from "react";

const transactionsPage = () => {
  return (
    <section className="px-4 mx-auto sm:px-8 mt-5">
      <h3 className="text-3xl font-bold mb-5 md:text-start text-center">
        Transactions
      </h3>
      <Transaction />
    </section>
  );
};

export default transactionsPage;
