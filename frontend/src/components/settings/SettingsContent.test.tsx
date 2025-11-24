import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { SettingsContent } from "./SettingsContent";
import { ThemeProvider } from "../../contexts/ThemeContext";

describe("<SettingsContent>", () => {
  it("renders successfully", () => {
    render(
      <ThemeProvider>
        <SettingsContent />
      </ThemeProvider>
    );
  });

  it("displays theme label", () => {
    render(
      <ThemeProvider>
        <SettingsContent />
      </ThemeProvider>
    );
    expect(screen.getByText("Theme")).toBeInTheDocument();
  });

  it("displays light mode radio button", () => {
    render(
      <ThemeProvider>
        <SettingsContent />
      </ThemeProvider>
    );
    expect(screen.getByLabelText("Light")).toBeInTheDocument();
  });

  it("displays dark mode radio button", () => {
    render(
      <ThemeProvider>
        <SettingsContent />
      </ThemeProvider>
    );
    expect(screen.getByLabelText("Dark")).toBeInTheDocument();
  });

  it("has light mode selected by default", () => {
    render(
      <ThemeProvider>
        <SettingsContent />
      </ThemeProvider>
    );
    const lightRadio = screen.getByLabelText("Light") as HTMLInputElement;
    expect(lightRadio.checked).toBe(true);
  });

  it("allows switching to dark mode", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <SettingsContent />
      </ThemeProvider>
    );

    const darkRadio = screen.getByLabelText("Dark") as HTMLInputElement;
    await user.click(darkRadio);

    expect(darkRadio.checked).toBe(true);
  });

  it("allows switching back to light mode", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <SettingsContent />
      </ThemeProvider>
    );

    const darkRadio = screen.getByLabelText("Dark") as HTMLInputElement;
    const lightRadio = screen.getByLabelText("Light") as HTMLInputElement;

    await user.click(darkRadio);
    expect(darkRadio.checked).toBe(true);

    await user.click(lightRadio);
    expect(lightRadio.checked).toBe(true);
  });

  it("has proper aria-label for accessibility", () => {
    render(
      <ThemeProvider>
        <SettingsContent />
      </ThemeProvider>
    );
    const radioGroup = screen.getByRole("radiogroup", {
      name: "Select theme mode",
    });
    expect(radioGroup).toBeInTheDocument();
  });
});
