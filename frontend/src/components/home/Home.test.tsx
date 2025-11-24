import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Home } from "./Home";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router";

// Keep the helper for isolated component testing
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("<Home>", () => {
  it("renders successfully", () => {
    renderWithRouter(<Home />);
  });

  it("renders the title", () => {
    renderWithRouter(<Home />);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });

  it("renders title as h1 heading", () => {
    renderWithRouter(<Home />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent("Welcome");
  });

  it("renders the dashboard button", () => {
    renderWithRouter(<Home />);
    expect(screen.getByRole("button", { name: "My Dashboard" })).toBeInTheDocument();
  });

  it("navigates to dashboard when button is clicked", async () => {
    const user = userEvent.setup();
    renderWithRouter(<Home />);

    const button = screen.getByRole("button", { name: "My Dashboard" });
    await user.click(button);

    // After navigation, URL should change to /dashboard
    expect(window.location.pathname).toBe("/dashboard");
  });

  it("renders within a Box component", () => {
    const { container } = renderWithRouter(<Home />);
    const box = container.querySelector(".MuiBox-root");
    expect(box).toBeInTheDocument();
  });
});
