import React from "react";
import { render, screen } from "@testing-library/react";
import UserTable from "@/components/Dashboard/User/UserTable";

const usersData = [
  {
    _id: "1",
    name: "User 1",
    email: "user1@example.com",
    role: "Admin",
    createdAt: "2023-09-01",
    status: "Active",
    // Add a placeholder image URL here
    image: "https://i.ibb.co/b5s3VYj/image.png",
  },
  {
    _id: "2",
    name: "User 2",
    email: "user2@example.com",
    role: "User",
    createdAt: "2023-09-02",
    status: "Inactive",
    // Add a placeholder image URL here
    image: "https://i.ibb.co/b5s3VYj/image.png",
  },
];

test("renders user data table", () => {
  render(<UserTable usersData={usersData} />);

  // Check if the table headers are present
  const headers = screen.getAllByRole("columnheader");
  expect(headers).toHaveLength(7); // 7 headers as per your component

  // Check if the user data is rendered
  const userDataRows = screen.getAllByRole("row", { name: /User \d/ }); // Adjust the regex pattern accordingly
  expect(userDataRows).toHaveLength(usersData.length);

  // Check if the "No Data Found" message is not displayed
  const noDataMessage = screen.queryByText("No Data Found");
  expect(noDataMessage).not.toBeInTheDocument();
});
