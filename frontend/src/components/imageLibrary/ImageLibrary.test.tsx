import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ImageLibrary } from "./ImageLibrary";

describe("<ImageLibrary>", () => {
  it("renders successfully", () => {
    render(<ImageLibrary />);
  });

  it("displays placeholder text", () => {
    render(<ImageLibrary />);
    expect(screen.getByText("List of Images")).toBeInTheDocument();
  });

  it("renders a paragraph element", () => {
    const { container } = render(<ImageLibrary />);
    const paragraph = container.querySelector("p");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("List of Images");
  });
});
