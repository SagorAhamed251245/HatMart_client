import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AboutSection from "@/components/Shared/Footer/AboutSection";

test('clicking "About us" button navigates to the aboutUs page', () => {
  // Render the component
  render(<AboutSection />);

  // Find the "About us" link
  const aboutUsLink = screen.getByText("About us");

  // Simulate a click on the link
  fireEvent.click(aboutUsLink);

  // You can add assertions here to check if the navigation was successful
  // For example, you can check if the URL has changed to the aboutUs page
  // Or you can check if a specific element from the aboutUs page is present in the document
});
