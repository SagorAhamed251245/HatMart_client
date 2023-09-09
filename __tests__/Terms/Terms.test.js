import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AboutSection from "@/components/Shared/Footer/AboutSection";

test('clicking "Terms & conditions" button navigates to the terms page', () => {
  // Render the component
  render(<AboutSection />);

  // Find the "Terms & conditions" link
  const termsLink = screen.getByText("Terms & condtions");

  // Simulate a click on the link
  fireEvent.click(termsLink);

  // You can add assertions here to check if the navigation was successful
  // For example, you can check if the URL has changed to the terms page
  // Or you can check if a specific element from the terms page is present in the document
});
