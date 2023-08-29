"use client";

import AllOrdersTable from "./AllOrdersTable";
import OrderStatics from "./OrderStatics";
import SalesPeriod from "./SalesPeriod";

const Orders = () => {
  return (
    <div className="mt-5">
      <SalesPeriod />
      <OrderStatics />
      <AllOrdersTable />
    </div>
  );
};

export default Orders;
