import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { NewEntry } from "./NewEntry";

describe("<App>", () => {
  it("renders successfully", () => {
    render(<NewEntry onClose={() => false} open={true} />);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <NewEntry onClose={() => false} open={false} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("contains a NewShuntEntryForm form element when modal is open", () => {
    render(<NewEntry onClose={() => false} open={true} />);
    const formInBody = document.body.querySelector("form");
    expect(formInBody).toBeInTheDocument();
  });

  it("Add new entry form contains expected input fields", () => {
    const { getByLabelText } = render(
      <NewEntry onClose={() => false} open={true} />,
    );
    expect(getByLabelText("Patient ID")).toBeInTheDocument();
    expect(getByLabelText("Patient first name")).toBeInTheDocument();
    expect(getByLabelText("Patient last name")).toBeInTheDocument();
  });
});
