import AddCategory from "@/components/Dashboard/Admin/AddCategory/AddCategory";
import { render, screen, waitFor } from "@testing-library/react";

it("should have Category Title: text", async () => {
  render(<AddCategory />); // arrange
  await waitFor(() => {
    const myElem = screen.getByText("Category Title:"); // act
    expect(myElem).toBeInTheDocument(); // assert
  });
});
