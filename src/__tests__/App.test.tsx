import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "../App";

describe("<App>", () => {
  it("renders successfully", () => {
    render(<App />);

    expect(window.location.href).toBe("http://localhost:5173/");
  });
});
