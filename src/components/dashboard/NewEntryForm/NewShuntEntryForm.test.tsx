import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NewShuntEntry } from "./NewShuntEntryForm";

describe("<App>", () => {
  it("renders successfully", () => {
    render(<NewShuntEntry />);
  });
});
