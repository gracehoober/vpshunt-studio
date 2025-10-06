import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { NewShuntEntryForm } from "./NewShuntEntryForm";
import userEvent from "@testing-library/user-event";

describe("<NewShuntEntryForm>", () => {
  it("renders successfully", () => {
    render(<NewShuntEntryForm />);
  });

  it("renders all form fields", () => {
    render(<NewShuntEntryForm />);
    expect(screen.getByLabelText("Patient first name")).toBeInTheDocument();
    expect(screen.getByLabelText("Patient last name")).toBeInTheDocument();
    expect(screen.getByLabelText("Patient ID")).toBeInTheDocument();
    expect(screen.getAllByLabelText("Patient date of birth")[0]).toBeInTheDocument();
    expect(screen.getAllByLabelText("Shunt placement date")[0]).toBeInTheDocument();
    expect(screen.getByLabelText("Shunt model")).toBeInTheDocument();
    expect(screen.getByLabelText("Shunt Serial ID")).toBeInTheDocument();
  });

  it("renders submit button with correct text", () => {
    render(<NewShuntEntryForm />);
    expect(screen.getByRole("button", { name: "addEntry.add" })).toBeInTheDocument();
  });

  it("displays validation errors when submitting empty form", async () => {
    const user = userEvent.setup();
    render(<NewShuntEntryForm />);

    const submitButton = screen.getByRole("button", { name: "addEntry.add" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Patient first name is required.")).toBeInTheDocument();
      expect(screen.getByText("Patient last name is required.")).toBeInTheDocument();
      expect(screen.getByText("Patient ID is required.")).toBeInTheDocument();
      expect(screen.getByText("Patient date of birth is required.")).toBeInTheDocument();
      expect(screen.getByText("Placement date is required.")).toBeInTheDocument();
      expect(screen.getByText("Shunt model is required.")).toBeInTheDocument();
      expect(screen.getByText("Shunt ID is required.")).toBeInTheDocument();
    });
  });

  it("displays error state on text fields when validation fails", async () => {
    const user = userEvent.setup();
    render(<NewShuntEntryForm />);

    const submitButton = screen.getByRole("button", { name: "addEntry.add" });
    await user.click(submitButton);

    await waitFor(() => {
      const firstNameInput = screen.getByLabelText("Patient first name");
      expect(firstNameInput).toHaveAttribute("aria-invalid", "true");
    });
  });

  it("allows user to fill out text fields", async () => {
    const user = userEvent.setup();
    render(<NewShuntEntryForm />);

    const firstNameInput = screen.getByLabelText("Patient first name");
    const lastNameInput = screen.getByLabelText("Patient last name");
    const patientIdInput = screen.getByLabelText("Patient ID");

    await user.type(firstNameInput, "John");
    await user.type(lastNameInput, "Doe");
    await user.type(patientIdInput, "P12345");

    expect(firstNameInput).toHaveValue("John");
    expect(lastNameInput).toHaveValue("Doe");
    expect(patientIdInput).toHaveValue("P12345");
  });

  it("submits form successfully with valid data", async () => {
    const consoleSpy = vi.spyOn(console, "log");
    const user = userEvent.setup();
    render(<NewShuntEntryForm />);

    // Fill out text fields
    await user.type(screen.getByLabelText("Patient first name"), "John");
    await user.type(screen.getByLabelText("Patient last name"), "Doe");
    await user.type(screen.getByLabelText("Patient ID"), "P12345");
    await user.type(screen.getByLabelText("Shunt model"), "Model X");
    await user.type(screen.getByLabelText("Shunt Serial ID"), "SN-12345");

    // Fill date fields - get input elements within date pickers
    const dobInput = screen.getAllByLabelText("Patient date of birth")[0].querySelector("input");
    if (dobInput) await user.type(dobInput, "01/15/1990");

    const placementInput = screen.getAllByLabelText("Shunt placement date")[0].querySelector("input");
    if (placementInput) await user.type(placementInput, "03/20/2023");

    // Submit
    const submitButton = screen.getByRole("button", { name: "addEntry.add" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        "Submitting form: ",
        expect.objectContaining({
          patientFirstName: "John",
          patientLastName: "Doe",
          patientId: "P12345",
          shuntModel: "Model X",
          shuntSerialID: "SN-12345",
        })
      );
    });

    consoleSpy.mockRestore();
  });

  it("clears validation errors when valid data is entered", async () => {
    const user = userEvent.setup();
    render(<NewShuntEntryForm />);

    // Submit to trigger validation errors
    const submitButton = screen.getByRole("button", { name: "addEntry.add" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Patient first name is required.")).toBeInTheDocument();
    });

    // Enter valid data
    const firstNameInput = screen.getByLabelText("Patient first name");
    await user.type(firstNameInput, "John");

    await waitFor(() => {
      expect(screen.queryByText("Patient first name is required.")).not.toBeInTheDocument();
    });
  });
});
