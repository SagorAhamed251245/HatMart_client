import React from "react";
import SalesStatistics from "../SalesStatistics";
import OverViewChart from "./OverViewChart";
import RecentSales from "./RecentSales";

const OverView = () => {
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
      <SalesStatistics />
      <div className="md:flex mt-5 gap-4">
        <OverViewChart />
        <RecentSales salesData={salesData} />
      </div>
    </div>
  );
};

export default OverView;
