import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { NavBar } from "./NavBar";

describe("<App>", () => {
  it("renders successfully", () => {
    render(<NavBar />);
  });
});
