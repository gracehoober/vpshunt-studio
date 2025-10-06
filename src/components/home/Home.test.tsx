import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Home } from "./Home";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router";

const MockedHome = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

describe("<Home>", () => {
  it("renders successfully", () => {
    render(<MockedHome />);
  });

  it("renders the title", () => {
    render(<MockedHome />);
    expect(screen.getByText("home.title")).toBeInTheDocument();
  });

  it("renders title as h1 heading", () => {
    render(<MockedHome />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent("home.title");
  });

  it("renders the dashboard button", () => {
    render(<MockedHome />);
    expect(screen.getByRole("button", { name: "home.toDashboard" })).toBeInTheDocument();
  });

  it("navigates to dashboard when button is clicked", async () => {
    const user = userEvent.setup();
    render(<MockedHome />);

    const button = screen.getByRole("button", { name: "home.toDashboard" });
    await user.click(button);

    // After navigation, URL should change to /dashboard
    expect(window.location.pathname).toBe("/dashboard");
  });

  it("renders within a Box component", () => {
    const { container } = render(<MockedHome />);
    const box = container.querySelector(".MuiBox-root");
    expect(box).toBeInTheDocument();
  });
});
