import AllFeedbackTable from "@/components/Dashboard/Admin/Feedback/AllFeedbackTable";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("AllFeedbackTable component", () => {
  it("should render the table", () => {
    const feedbackData = [
      {
        feedbackNumber: 1,
        userName: "John Doe",
        userEmail: "johndoe@example.com",
        userImage: "https://example.com/image.png",
        rate: 5,
        message: "This is a great product!",
      },
      {
        feedbackNumber: 2,
        userName: "Jane Doe",
        userEmail: "janedoe@example.com",
        userImage: "https://example.com/image2.png",
        rate: 3,
        message: "This product could be improved.",
      },
    ];
    render(<AllFeedbackTable feedbackData={feedbackData} />);
    const table = screen.getByTestId("all-feedback-table");
    expect(table).toBeInTheDOM();
  });

  it("should render the feedback data", () => {
    const feedbackData = [
      {
        feedbackNumber: 1,
        userName: "John Doe",
        userEmail: "johndoe@example.com",
        userImage: "https://example.com/image.png",
        rate: 5,
        message: "This is a great product!",
      },
      {
        feedbackNumber: 2,
        userName: "Jane Doe",
        userEmail: "janedoe@example.com",
        userImage: "https://example.com/image2.png",
        rate: 3,
        message: "This product could be improved.",
      },
    ];
    render(<AllFeedbackTable feedbackData={feedbackData} />);
    const feedbackRows = screen.getAllByTestId("feedback-row");
    expect(feedbackRows.length).toBe(2);
  });

  it("should render the feedback data correctly", () => {
    const feedbackData = [
      {
        feedbackNumber: 1,
        userName: "John Doe",
        userEmail: "johndoe@example.com",
        userImage: "https://example.com/image.png",
        rate: 5,
        message: "This is a great product!",
      },
      {
        feedbackNumber: 2,
        userName: "Jane Doe",
        userEmail: "janedoe@example.com",
        userImage: "https://example.com/image2.png",
        rate: 3,
        message: "This product could be improved.",
      },
    ];
    render(<AllFeedbackTable feedbackData={feedbackData} />);
    const feedbackRows = screen.getAllByTestId("feedback-row");
    expect(feedbackRows[0]).toHaveTextContent("1");
    expect(feedbackRows[0]).toHaveTextContent("John Doe");
    expect(feedbackRows[0]).toHaveTextContent("5");
    expect(feedbackRows[0]).toHaveTextContent("This is a great product!");
    expect(feedbackRows[1]).toHaveTextContent("2");
    expect(feedbackRows[1]).toHaveTextContent("Jane Doe");
    expect(feedbackRows[1]).toHaveTextContent("3");
    expect(feedbackRows[1]).toHaveTextContent(
      "This product could be improved."
    );
  });
});
