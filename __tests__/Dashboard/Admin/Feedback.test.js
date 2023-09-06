import FeedbackSmallView from "@/components/Dashboard/Admin/Feedback/FeedbackSmallView";
import { render, waitFor, screen } from "@testing-library/react/types";

const mockFeedback = [
  {
    _id: 3,
    feedbackNumber: "FED125",
    userImage: "https://i.ibb.co/b5s3VYj/image.png",
    userName: "Emily Brown",
    userEmail: "emily@example.com",
    message: "Satisfied with the quality.",
    rate: "4",
    createdAt: "2023-08-18T15:20:10.987Z",
    updatedAt: "2023-08-18T15:20:10.987Z",
  },
];

// it("it should have Feedback", () => {
//   render(<FeedbackSmallView feedbackData={mockFeedback} />);

//   const todosArray = screen.getAllByRole("table");
//   expect(todosArray.length).toBe(2);
// });
