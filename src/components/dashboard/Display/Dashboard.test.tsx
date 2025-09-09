import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Dashboard } from "./Dashboard";

describe("<App>", () => {
  it("renders successfully", () => {
    render(<Dashboard />);
  });
});
