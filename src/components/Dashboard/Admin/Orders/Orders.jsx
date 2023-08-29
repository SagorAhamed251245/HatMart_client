"use client";

import AllOrders from "./AllOrders";
import OrderStatics from "./OrderStatics";
import SalesPeriod from "./SalesPeriod";

const Orders = () => {
  return (
    <div className="mt-5">
      <SalesPeriod />
      <OrderStatics />
      <AllOrders />
    </div>
  );
};

export default Orders;
