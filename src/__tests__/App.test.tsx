import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "../App";

describe("<App>", () => {
  it("renders successfully", () => {
    render(<App />);
    expect(true).toBe(true);
    expect(window.location.href).toBe("http://localhost:3000/");
  });

  it("renders the NavBar", () => {
    render(<App />);
    expect(screen.getByText("VP Shunt Studio")).toBeInTheDocument();
    expect(screen.getByText("Profile/name")).toBeInTheDocument();
  });

  it("renders the AppRouter", () => {
    render(<App />);
    expect(screen.getByTestId("router")).toBeInTheDocument();
  });
});
