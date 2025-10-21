import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { NavBar } from "./NavBar";

describe("<NavBar>", () => {
  it("renders successfully", () => {
    render(<NavBar />);
  });

  it("renders the app title", () => {
    render(<NavBar />);
    expect(screen.getByText("VP Shunt Studio")).toBeInTheDocument();
  });

  it("renders the profile text", () => {
    render(<NavBar />);
    expect(screen.getByText("Profile/name")).toBeInTheDocument();
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
    expect(title).toHaveTextContent("VP Shunt Studio");
  });

  it("displays profile button with text", () => {
    render(<NavBar />);
    const profileButton = screen.getByRole("button", {
      name: "Open profile menu",
    });
    expect(profileButton).toBeInTheDocument();
    expect(profileButton).toHaveTextContent("Profile/name");
  });
});
