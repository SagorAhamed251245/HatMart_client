// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import MyAllOrdersTable from '@/components/Dashboard/User/MyOrder/MyAllOrdersTable'; 

// const orders = [
//   {
//     id: 1,
//     orderNumber: 'ORD123',
//     productImage: 'https://i.ibb.co/37mp1RR/image.png',
//     status: 'confirmed',
//     productName: 'Product A',
//     sku: 'SKU001',
//     category: 'Electronics',
//     payment: '600',
//     rate: '4',
//   },
//   // Add more orders as needed
// ];

// test('renders orders table with data', () => {
//   render(<MyAllOrdersTable />); // Render your component

//   // Ensure the headers are present
//   const headers = screen.getAllByRole('columnheader');
//   expect(headers).toHaveLength(7); // Adjust the count based on your table structure

//   // Ensure the rows for each order are present and contain order IDs
//   orders.forEach((order) => {
//     const orderRow = screen.getByText(order.id.toString()); // Check for the order ID
//     expect(orderRow).toBeInTheDocument();

//     const orderNumberCell = screen.getByText(order.orderNumber);
//     expect(orderNumberCell).toBeInTheDocument();

//     const productNameCell = screen.getByText(order.productName);
//     expect(productNameCell).toBeInTheDocument();

//     const categoryCell = screen.getByText(order.category);
//     expect(categoryCell).toBeInTheDocument();

//     const paymentCell = screen.getByText(`$${order.payment}`);
//     expect(paymentCell).toBeInTheDocument();

//     // Add more assertions as needed for other data fields
//   });

//   // Ensure the "No data" message is not present
//   const noDataMessage = screen.queryByText('No data');
//   expect(noDataMessage).not.toBeInTheDocument();
// });


// have some problem need to fix this unit test