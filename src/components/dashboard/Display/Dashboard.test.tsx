import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { waitFor } from "@testing-library/react";

import { Dashboard } from "./Dashboard";

describe("<App>", () => {
  it("renders successfully", () => {
    render(<Dashboard />);
  });

  it("matches snapshot", () => {
    const { container } = render(<Dashboard />);
    expect(container).toMatchSnapshot();
  });

  it("contains the text 'Add Entry'", () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText("addEntry.button")).toBeInTheDocument();
  });

  it("contains a button element", () => {
    const { container } = render(<Dashboard />);
    const button = container.querySelector("button");
    expect(button).toBeInTheDocument();
  });

  it("renders the StyledDashboardGrid component", () => {
    const { container } = render(<Dashboard />);
    const grid = container.querySelector(".MuiDataGrid-root");
    expect(grid).toBeInTheDocument();
  });

  it("opens NewEntry modal on button click", async () => {
    const { getByText, queryByLabelText } = render(<Dashboard />);
    const button = getByText("addEntry.button");
    expect(queryByLabelText("close")).not.toBeInTheDocument();
    button.click();
    await waitFor(() => {
      expect(queryByLabelText("close")).toBeInTheDocument();
    });
  });

  it("closes NewEntry modal on close button click", async () => {
    const { getByText, queryByLabelText, findByTestId } = render(<Dashboard />);
    const button = getByText("addEntry.button");
    button.click();
    const closeButton = await findByTestId("close-modal-button");
    expect(queryByLabelText("close")).toBeInTheDocument();
    closeButton.click();
    await waitFor(() => {
      expect(queryByLabelText("close")).not.toBeInTheDocument();
    });
  });
});
