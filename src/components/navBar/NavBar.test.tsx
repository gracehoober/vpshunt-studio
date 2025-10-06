import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { NavBar } from "./NavBar";

describe("<NavBar>", () => {
  it("renders successfully", () => {
    render(<NavBar />);
  });

  it("renders the app title", () => {
    render(<NavBar />);
    expect(screen.getByText("title.text")).toBeInTheDocument();
  });

  it("renders the profile text", () => {
    render(<NavBar />);
    expect(screen.getByText("navBar.elements.profile")).toBeInTheDocument();
  });

  it("renders within an AppBar component", () => {
    const { container } = render(<NavBar />);
    const appBar = container.querySelector(".MuiAppBar-root");
    expect(appBar).toBeInTheDocument();
  });

  it("renders a Toolbar component", () => {
    const { container } = render(<NavBar />);
    const toolbar = container.querySelector(".MuiToolbar-root");
    expect(toolbar).toBeInTheDocument();
  });

  it("displays title as h1 heading", () => {
    render(<NavBar />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent("title.text");
  });

  it("displays profile text as h5 heading", () => {
    render(<NavBar />);
    const profile = screen.getByRole("heading", { level: 5 });
    expect(profile).toHaveTextContent("navBar.elements.profile");
  });
});
