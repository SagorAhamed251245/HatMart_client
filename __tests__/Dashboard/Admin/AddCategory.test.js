import AddCategory from "@/components/Dashboard/Admin/AddCategory/AddCategory";
import addCategory from "@/utils/addCategory";
import { render, screen, waitFor } from "@testing-library/react";

it("should have Category Title: text", async () => {
  render(<AddCategory />);
  await waitFor(() => {
    const myElem = screen.getByText("Category Title:");
    expect(myElem).toBeInTheDocument();
  });
});
// ================

global.fetch = jest.fn();

describe("addCategory", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should add a category", async () => {
    const expectedResponse = {
      category: "Dairy and Eggs",
      icon: "https://i.ibb.co/FW9wf02/dairy-products.png",
      sub_category: ["Milk", "Cheese", "Yogurt", "Eggs", "Butter"],
    };
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => expectedResponse,
    });

    const categoryData = { name: "New Category" };
    const response = await addCategory(categoryData);
    expect(response).toEqual(expectedResponse);
  });
});
