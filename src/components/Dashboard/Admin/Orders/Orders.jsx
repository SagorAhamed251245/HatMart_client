"use client";

import AllOrdersTable from "./AllOrdersTable";
import OrderStatics from "./OrderStatics";
import SalesPeriod from "./SalesPeriod";

const Orders = ({ ordersData }) => {
  return (
    <div className="mt-5">
      {/* <SalesPeriod /> */}
      <OrderStatics />
      <AllOrdersTable ordersData={ordersData} />
    </div>
  );
};

export default Orders;
