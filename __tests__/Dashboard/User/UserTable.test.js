import React from 'react';
import { render, screen } from '@testing-library/react';
import UserTable from '@/components/Dashboard/User/UserTable';

const usersData = [
    {
      _id: '1',
      name: 'User 1',
      email: 'user1@example.com',
      role: 'Admin',
      createdAt: '2023-09-01',
      status: 'Active',
      image: 'https://i.ibb.co/b5s3VYj/image.png',
    },
    {
      _id: '2',
      name: 'User 2',
      email: 'user2@example.com',
      role: 'User',
      createdAt: '2023-09-02',
      status: 'Inactive',
      image: 'https://i.ibb.co/b5s3VYj/image.png',
    },
  ];

test('renders user data table', () => {
  render(<UserTable usersData={usersData} />);

  const headers = screen.getAllByRole('columnheader');

  const userDataRows = screen.getAllByRole('row', { name: /User \d/ });
  expect(userDataRows).toHaveLength(usersData.length);

  // Check if the "No Data Found" message is not displayed
  const noDataMessage = screen.queryByText('No Data Found');
  expect(noDataMessage).not.toBeInTheDocument();
});
