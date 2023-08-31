import React from "react";
import TransactionFilter from "./TransactionFilter";
import AllTransactionsTable from "./AllTransactionsTable";

const Transaction = () => {
  return (
    <div>
      <TransactionFilter />
      <AllTransactionsTable />
    </div>
  );
};

export default Transaction;
