import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ErrorAlert } from "./ErrorAlert";
import userEvent from "@testing-library/user-event";

describe("<ErrorAlert>", () => {
  it("renders nothing when error is null", () => {
    const { container } = render(
      <ErrorAlert error={null} onDismiss={() => {}} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders error message when error is provided", () => {
    render(
      <ErrorAlert
        error="Something went wrong"
        onDismiss={() => {}}
      />
    );
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("renders with error severity", () => {
    const { container } = render(
      <ErrorAlert
        error="Test error"
        onDismiss={() => {}}
      />
    );
    const alert = container.querySelector(".MuiAlert-standardError");
    expect(alert).toBeInTheDocument();
  });

  it("calls onDismiss when close button is clicked", async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();

    render(
      <ErrorAlert
        error="Test error"
        onDismiss={onDismiss}
      />
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    await user.click(closeButton);

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("renders retry button when onRetry is provided", () => {
    render(
      <ErrorAlert
        error="Test error"
        onDismiss={() => {}}
        onRetry={() => {}}
      />
    );
    expect(screen.getByRole("button", { name: "Retry" })).toBeInTheDocument();
  });

  it("does not render retry button when onRetry is not provided", () => {
    render(
      <ErrorAlert
        error="Test error"
        onDismiss={() => {}}
      />
    );
    expect(screen.queryByRole("button", { name: "Retry" })).not.toBeInTheDocument();
  });

  it("calls onRetry when retry button is clicked", async () => {
    const user = userEvent.setup();
    const onRetry = vi.fn();

    render(
      <ErrorAlert
        error="Test error"
        onDismiss={() => {}}
        onRetry={onRetry}
      />
    );

    const retryButton = screen.getByRole("button", { name: "Retry" });
    await user.click(retryButton);

    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it("renders custom retry button text", () => {
    render(
      <ErrorAlert
        error="Test error"
        onDismiss={() => {}}
        onRetry={() => {}}
        retryButtonText="Try Again"
      />
    );
    expect(screen.getByRole("button", { name: "Try Again" })).toBeInTheDocument();
  });

  it("uses default retry button text when not provided", () => {
    render(
      <ErrorAlert
        error="Test error"
        onDismiss={() => {}}
        onRetry={() => {}}
      />
    );
    expect(screen.getByRole("button", { name: "Retry" })).toBeInTheDocument();
  });
});
