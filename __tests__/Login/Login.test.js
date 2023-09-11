import React from "react";
import { render, screen } from "@testing-library/react";
import SocialMediaForm from "@/components/Login/SocialMediaForm";

describe("SocialMediaForm", () => {
  it("renders Facebook and Google buttons", () => {
    render(<SocialMediaForm />);

    // Check if Facebook and Google buttons are rendered
    const facebookButton = screen.getByText("Facebook");
    const googleButton = screen.getByText("Google");

    expect(facebookButton).toBeInTheDocument();
    expect(googleButton).toBeInTheDocument();
  });

  // Add more test cases as needed
});
