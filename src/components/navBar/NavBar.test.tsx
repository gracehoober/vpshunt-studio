import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { NavBar } from "./NavBar";
import { ThemeProvider } from "../../contexts/ThemeContext";

const renderNavBar = () => {
  return render(
    <ThemeProvider>
      <NavBar />
    </ThemeProvider>
  );
};

describe("<NavBar>", () => {
  it("renders successfully", () => {
    renderNavBar();
  });

  it("renders the app title", () => {
    renderNavBar();
    expect(screen.getByText("VP Shunt Studio")).toBeInTheDocument();
  });

  it("renders the profile text", () => {
    renderNavBar();
    expect(screen.getByText("Profile/name")).toBeInTheDocument();
  });

  it("renders within an AppBar component", () => {
    const { container } = renderNavBar();
    const appBar = container.querySelector(".MuiAppBar-root");
    expect(appBar).toBeInTheDocument();
  });

  it("renders a Toolbar component", () => {
    const { container } = renderNavBar();
    const toolbar = container.querySelector(".MuiToolbar-root");
    expect(toolbar).toBeInTheDocument();
  });

  it("displays title as h1 heading", () => {
    renderNavBar();
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent("VP Shunt Studio");
  });

  it("displays profile button with text", () => {
    renderNavBar();
    const profileButton = screen.getByRole("button", {
      name: "Open profile menu",
    });
    expect(profileButton).toBeInTheDocument();
    expect(profileButton).toHaveTextContent("Profile/name");
  });

  it("opens profile menu when profile button is clicked", async () => {
    const user = userEvent.setup();
    renderNavBar();

    const profileButton = screen.getByRole("button", {
      name: "Open profile menu",
    });

    await user.click(profileButton);

    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("closes profile menu when menu item is clicked", async () => {
    const user = userEvent.setup();
    renderNavBar();

    const profileButton = screen.getByRole("button", {
      name: "Open profile menu",
    });

    await user.click(profileButton);
    expect(screen.getByRole("menu")).toBeInTheDocument();

    // Click outside to close (MUI Menu behavior)
    await user.keyboard("{Escape}");

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("opens settings modal when settings menu item is clicked", async () => {
    const user = userEvent.setup();
    renderNavBar();

    const profileButton = screen.getByRole("button", {
      name: "Open profile menu",
    });

    await user.click(profileButton);

    const settingsMenuItem = screen.getByText("Settings");
    await user.click(settingsMenuItem);

    // Settings modal should be open
    expect(screen.getByRole("heading", { name: "Settings" })).toBeInTheDocument();
  });

  it("closes settings modal when close button is clicked", async () => {
    const user = userEvent.setup();
    renderNavBar();

    const profileButton = screen.getByRole("button", {
      name: "Open profile menu",
    });

    await user.click(profileButton);

    const settingsMenuItem = screen.getByText("Settings");
    await user.click(settingsMenuItem);

    const closeButton = screen.getByLabelText("close");
    await user.click(closeButton);

    expect(screen.queryByRole("heading", { name: "Settings" })).not.toBeInTheDocument();
  });
});
