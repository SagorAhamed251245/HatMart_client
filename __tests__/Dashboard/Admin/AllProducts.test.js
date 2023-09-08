import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import ProductSearch from "@/components/Dashboard/Admin/AllProducts/ProductSearch";
// import AllProductsFilterByPrice from "@/components/Dashboard/Admin/AllProducts/AllProductsFilterByPrice";

describe("ProductSearch", () => {
  it("it should filter products based on search input", () => {
    const products = [
      { _id: "1", title: "Product 1" },
      { _id: "2", title: "Product 2" },
      { _id: "3", title: "Product 3" },
    ];

    const setData = jest.fn();

    const { getByPlaceholderText } = render(
      <ProductSearch products={products} setData={setData} />
    );

    const searchInput = getByPlaceholderText("Enter Product name here");

    fireEvent.change(searchInput, { target: { value: "Product 1" } });

    expect(setData).toHaveBeenCalledWith([{ _id: "1", title: "Product 1" }]);

    fireEvent.change(searchInput, { target: { value: "Product 3" } });

    expect(setData).toHaveBeenCalledWith([{ _id: "3", title: "Product 3" }]);

    fireEvent.change(searchInput, { target: { value: "" } });

    expect(setData).toHaveBeenCalledWith(products);
  });

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//   it("should sort products by price in descending order", async () => {
//     const products = [
//       { _id: "1", price: 10 },
//       { _id: "2", price: 20 },
//       { _id: "3", price: 5 },
//     ];

//     const setData = jest.fn();

//     const { getByText } = render(
//       <AllProductsFilterByPrice data={products} setData={setData} />
//     );

//     // Get the select input element
//     const selectElement = getByText("Select By Price");

//     // Simulate selecting "High to low" option
//     fireEvent.change(selectElement, { target: { value: "highToLow" } });

//     // Wait for a brief moment to ensure asynchronous state update
//     await waitFor(() => {
//       // Ensure that setData is called with the products sorted in descending order by price
//       expect(setData).toHaveBeenCalledWith([
//         { _id: "2", price: 20 },
//         { _id: "1", price: 10 },
//         { _id: "3", price: 5 },
//       ]);
//     });
//   });

// //   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//   it("should sort products by price in ascending order", async () => {
//     const products = [
//       { _id: "1", price: 10 },
//       { _id: "2", price: 20 },
//       { _id: "3", price: 5 },
//     ];

//     const setData = jest.fn();

//     const { getByText } = render(
//       <AllProductsFilterByPrice data={products} setData={setData} />
//     );

//     // Get the select input element
//     const selectElement = getByText("Select By Price");

//     // Simulate selecting "Low to High" option
//     fireEvent.change(selectElement, { target: { value: "lowToHigh" } });

//     // Wait for a brief moment to ensure asynchronous state update
//     await waitFor(() => {
//       // Ensure that setData is called with the products sorted in ascending order by price
//       expect(setData).toHaveBeenCalledWith([
//         { _id: "3", price: 5 },
//         { _id: "1", price: 10 },
//         { _id: "2", price: 20 },
//       ]);
//     });
//   });
});
