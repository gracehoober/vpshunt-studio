import { getByRole, render } from "@testing-library/react";
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

  it("contains the text 'Add New Entry' button", () => {
    const {} = render(<NewEntry onClose={() => false} open={false} />);
    expect(getByText("addEntry.button")).toBeInTheDocument();
  });

  // it("contains a form element", () => {
  //   const { container } = render(
  //     <NewEntry onClose={() => false} open={false} />,
  //   );
  //   const form = container.querySelector("form");
  //   expect(form).toBeInTheDocument();
  // });

  // it("contains input fields", () => {
  //   const { getByLabelText } = render(
  //     <NewEntry onClose={() => false} open={false} />,
  //   );
  //   expect(getByLabelText("Patient ID")).toBeInTheDocument();
  //   expect(getByLabelText("addEntry.fields.ipAddress")).toBeInTheDocument();
  //   expect(getByLabelText("addEntry.fields.username")).toBeInTheDocument();
  //   expect(getByLabelText("addEntry.fields.password")).toBeInTheDocument();
  //   expect(getByLabelText("addEntry.fields.sshKey")).toBeInTheDocument();
  // });
});
