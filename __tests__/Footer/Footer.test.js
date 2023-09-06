import Footer from "@/components/Shared/Footer/Footer";
import { render, screen, waitFor } from "@testing-library/react";

describe("Footer", () => {
  it('should have "copyright all rights preserved by hatmart" text', async () => {
    render(<Footer />);
    await waitFor(() => {
      const myElem = screen.getByText(
        "@copyright all rights preserved by hatmart"
      );
      expect(myElem).toBeInTheDocument();
    });
  });
  // ----------------------------------------------------------------
  it('should have "copyright all rights preserved by Hatmart" text', async () => {
    render(<Footer />);
    await waitFor(() => {
      const myElem = screen.getByText(
        /@copyright all rights preserved by hatmart/i
      );
      expect(myElem).toBeInTheDocument();
    });
  });
});
