import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddToCartBtn from "@/components/Home/Products/AddToCartBtn";
import BuyNow from "@/components/Home/Products/BuyNow";

import getProducts from "@/utils/getProducts";

describe("AddToCartBtn", () => {
  it("should call the handleAddToCart function when clicked", () => {
    const handleAddToCart = jest.fn();

    const { getByText } = render(
      <AddToCartBtn handleAddToCart={handleAddToCart} id="product-123" />
    );

    const addToCartButton = getByText("Add");

    fireEvent.click(addToCartButton);

    expect(handleAddToCart).toHaveBeenCalledWith("product-123");
  });
});

// ________________________________________________________________
describe("BuyNow", () => {
  it("should render the 'Buy Now' button with the correct attributes", () => {
    const { container } = render(<BuyNow stock_quantity={10} />);

    const buyNowLink = screen.getByRole("link", { name: "Buy Now" });

    expect(buyNowLink).toHaveAttribute("href", "/payment");

    expect(buyNowLink).not.toHaveAttribute("disabled");

    expect(buyNowLink).toHaveClass(
      "bg-[#ff6347cc]",
      "text-white",
      "md:text-base",
      "text-sm",
      "px-[10px]",
      "md:px-4",
      "font-medium",
      "py-1",
      "rounded",
      "hover:bg-[#FF7B13]"
    );

    expect(buyNowLink).toHaveTextContent("Buy Now");
  });
});
// ------------------------------------------
