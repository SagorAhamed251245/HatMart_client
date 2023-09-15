import React from "react";
import MyTransactionTable from "./MyTransactionTable";

const MyTransaction = () => {
    
  return (
    <div>
        {/* title */}
      <div>
        <h3 className="text-4xl font-semibold mb-2">My Transactions</h3>
        <p className="text-sm">
          All the Transaction Details
        </p>
      </div>
      {/* transaction */}
      <section>
            <MyTransactionTable />
      </section>
    </div>
  );
};

export default MyTransaction;
