import React from "react";
import TransactionFilter from "./TransactionFilter";
import AllTransactionsTable from "./AllTransactionsTable";

const Transaction = ({ transactionsData }) => {
  return (
    <div>
      <TransactionFilter />
      <AllTransactionsTable transactionsData={transactionsData} />
    </div>
  );
};

export default Transaction;
