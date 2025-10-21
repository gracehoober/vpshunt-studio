import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, beforeEach, vi } from "vitest";
import { ThemeProvider, useTheme } from "./ThemeContext";

describe("ThemeContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("provides light mode by default", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current.mode).toBe("light");
  });

  it("toggles theme from light to dark", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.mode).toBe("dark");
  });

  it("toggles theme from dark to light", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.mode).toBe("dark");

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.mode).toBe("light");
  });

  it("sets theme to dark mode", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    act(() => {
      result.current.setTheme("dark");
    });

    expect(result.current.mode).toBe("dark");
  });

  it("sets theme to light mode", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    act(() => {
      result.current.setTheme("dark");
    });
    expect(result.current.mode).toBe("dark");

    act(() => {
      result.current.setTheme("light");
    });
    expect(result.current.mode).toBe("light");
  });

  it("persists theme to localStorage", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    act(() => {
      result.current.setTheme("dark");
    });

    expect(localStorage.getItem("theme-mode")).toBe("dark");
  });

  it("loads theme from localStorage on mount", () => {
    localStorage.setItem("theme-mode", "dark");

    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current.mode).toBe("dark");
  });

  it("throws error when useTheme is used outside ThemeProvider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => {
      renderHook(() => useTheme());
    }).toThrow("useTheme must be used within a ThemeProvider");

    consoleError.mockRestore();
  });
});
