import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NewShuntEntryForm } from "./NewShuntEntryForm";

describe("<App>", () => {
  it("renders successfully", () => {
    render(<NewShuntEntryForm />);
  });
});
