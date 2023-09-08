import React from "react";
import { render, screen } from "@testing-library/react";
import AllTransactionsTable from "@/components/Dashboard/Admin/Transactions/AllTransactionsTable";

const transactions = [
  {
    id: 1,
    transactionId: "ORD123",
    productImage: "https://i.ibb.co/37mp1RR/image.png",
    status: "approved",
    productName: "Product A",
    sku: "SKU001",
    date: "2023-08-16T10:00:00Z",
    payment: "600",
    tax: "4",
  },
  {
    id: 2,
    transactionId: "ORD124",
    productImage: "https://i.ibb.co/DWCwJM6/image.png",
    status: "rejected",
    productName: "Product B",
    sku: "SKU002",
    date: "2023-08-16T10:00:00Z",
    payment: "120",
    tax: "5",
  },
];

test("renders user data table", () => {
  render(<AllTransactionsTable transactions={transactions} />);

  // Check if the table headers are present
  const headers = screen.getAllByRole("columnheader");
  expect(headers).toHaveLength(7); // 7 headers as per your component

  // Check if the user data is rendered
  const transactions = screen.getAllByRole("row", { name: /User \d/ }); // Adjust the regex pattern accordingly
  expect(transactions).toHaveLength(transactions.length); // Use transactions.length instead of usersData.length
});
