import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { NewEntry } from "./NewEntry";

describe("<App>", () => {
  it("renders successfully", () => {
    render(<NewEntry onClose={() => false} open={false} />);
  });
});
