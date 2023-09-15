import React, { useEffect, useState } from "react";
import SalesStatistics from "../SalesStatistics";
import OverViewChart from "./OverViewChart";
import RecentSales from "./RecentSales";
import getOrders from "@/utils/getOrders";
import getTransactions from "@/utils/getTransactions";

const OverView = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [transactionsData, setTransactionsData] = useState([]);

  useEffect(() => {
    (async () => {
      const order = await getOrders();
      setOrdersData(order);
    })();
    (async () => {
      const transactions = await getTransactions();
      setTransactionsData(transactions);
    })();
  }, []);
  const salesData = [
    {
      _id: "1",
      customerName: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      image: "https://i.ibb.co/b5s3VYj/image.png",
      price: 49.99,
    },
    {
      _id: "2",
      customerName: "John Smith",
      email: "john.smith@example.com",
      image: "https://i.ibb.co/8NvN0pG/image.png",
      price: 79.99,
    },
    {
      _id: "3",
      customerName: "Emily Davis",
      email: "emily.davis@example.com",
      image: "https://i.ibb.co/b5s3VYj/image.png",
      price: 39.99,
    },
    {
      _id: "4",
      customerName: "Michael Brown",
      email: "michael.brown@example.com",
      image: "https://i.ibb.co/8NvN0pG/image.png",
      price: 59.99,
    },
    {
      _id: "5",
      customerName: "Lisa Miller",
      email: "lisa.miller@example.com",
      image: "https://i.ibb.co/b5s3VYj/image.png",
      price: 69.99,
    },
  ];

  return (
    <div>
      <SalesStatistics transactionsData={transactionsData} />
      <div className="md:flex mt-5 gap-4">
        <OverViewChart />
        <RecentSales transactionsData={transactionsData} />
      </div>
    </div>
  );
};

export default OverView;
