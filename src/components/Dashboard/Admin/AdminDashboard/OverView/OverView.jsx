import React from "react";
import SalesStatistics from "../SalesStatistics";
import OverViewChart from "./OverViewChart";
import RecentSales from "./RecentSales";

const OverView = () => {
  const salesData = [
    {
      customerName: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      image: "https://i.ibb.co/b5s3VYj/image.png",
      price: 49.99,
    },
    {
      customerName: "John Smith",
      email: "john.smith@example.com",
      image: "https://i.ibb.co/8NvN0pG/image.png",
      price: 79.99,
    },
    {
      customerName: "Emily Davis",
      email: "emily.davis@example.com",
      image: "https://i.ibb.co/b5s3VYj/image.png",
      price: 39.99,
    },
    {
      customerName: "Michael Brown",
      email: "michael.brown@example.com",
      image: "https://i.ibb.co/8NvN0pG/image.png",
      price: 59.99,
    },
    {
      customerName: "Lisa Miller",
      email: "lisa.miller@example.com",
      image: "https://i.ibb.co/b5s3VYj/image.png",
      price: 69.99,
    },
  ];

  return (
    <div>
      <SalesStatistics />
      <div className="flex mt-5">
        <OverViewChart />
        <RecentSales salesData={salesData} />
      </div>
    </div>
  );
};

export default OverView;
