import React from "react";
import CanceledOrdersTable from "./CanceledOrdersTable";


const CanceledOrders = () => {

  return (
    <div>
        {/* title */}
      <div className="my-5 ml-6">
        <h4 className=" text-3xl font-bold">My Cancellations</h4>
        <p className="text-sm mt-3">Orders that were Canceled by me</p>
      </div>
      {/* tbale here */}
      <CanceledOrdersTable />
    </div>
  );
};

export default CanceledOrders;
