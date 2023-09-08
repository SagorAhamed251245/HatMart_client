import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UserTypeTab from "@/components/Dashboard/User/UserTypeTab";

const usersData = [
  {
    status: "active",
    _id: "64e49069c60a0097a605a3e5",
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    role: "user",
    image: "https://i.ibb.co/8NvN0pG/image.png",
    createdAt: "2023-08-22T12:00:00.000Z",
  },
  {
    status: "active",
    _id: "64e49069c60a0097a605a3e6",
    name: "Jane Smith",
    email: "jane@example.com",
    password: "securepass456",
    role: "admin",
    image: "https://i.ibb.co/3m74h8T/image.png",
    createdAt: "2023-08-22T12:15:00.000Z",
  },
];

test("clicking the Tab component changes the user role", () => {
  const useStateSpy = jest.spyOn(React, "useState");
  
  const setUserRoleMock = jest.fn();
  useStateSpy.mockReturnValue(["user", setUserRoleMock]); 

  const { getByText } = render(<UserTypeTab usersData={usersData} />);

  const adminTab = getByText("Admin");
  fireEvent.click(adminTab);

  expect(setUserRoleMock).toHaveBeenCalledWith("admin");
});
