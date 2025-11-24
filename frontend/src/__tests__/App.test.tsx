import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "../App";

describe("<App>", () => {
  it("renders successfully", () => {
    render(<App />);
    expect(window.location.href).toBe("http://localhost:3000/");
  });

  it("renders the NavBar", () => {
    render(<App />);
    expect(screen.getByText("VP Shunt Studio")).toBeInTheDocument();
    expect(screen.getByText("Profile/name")).toBeInTheDocument();
  });

  it("renders the Home page by default", () => {
    render(<App />);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "My Dashboard" })).toBeInTheDocument();
  });
});
