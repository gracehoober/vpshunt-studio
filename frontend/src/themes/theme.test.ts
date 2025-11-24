import { describe, expect, it } from "vitest";
import { getTheme } from "./theme";

describe("getTheme", () => {
  describe("light theme", () => {
    it("creates a light theme", () => {
      const theme = getTheme("light");
      expect(theme.palette.mode).toBe("light");
    });

    it("has correct background colors for light mode", () => {
      const theme = getTheme("light");
      expect(theme.palette.background.default).toBe("#FAF9F7");
      expect(theme.palette.background.paper).toBe("#FFFFFF");
    });

    it("has correct text colors for light mode", () => {
      const theme = getTheme("light");
      expect(theme.palette.text.primary).toBe("#1E293B");
      expect(theme.palette.text.secondary).toBe("#64748B");
      expect(theme.palette.text.disabled).toBe("#94A3B8");
    });

    it("has correct primary colors for light mode", () => {
      const theme = getTheme("light");
      expect(theme.palette.primary.main).toBe("#5a8574");
      expect(theme.palette.primary.light).toBe("#7ea394");
      expect(theme.palette.primary.dark).toBe("#4a6d5f");
    });

    it("has correct secondary colors for light mode", () => {
      const theme = getTheme("light");
      expect(theme.palette.secondary.main).toBe("#E87461");
    });

    it("uses light shadows", () => {
      const theme = getTheme("light");
      expect(theme.shadows[1]).toBe("0px 1px 2px rgba(0, 0, 0, 0.05)");
    });
  });

  describe("dark theme", () => {
    it("creates a dark theme", () => {
      const theme = getTheme("dark");
      expect(theme.palette.mode).toBe("dark");
    });

    it("has correct background colors for dark mode", () => {
      const theme = getTheme("dark");
      expect(theme.palette.background.default).toBe("#121212");
      expect(theme.palette.background.paper).toBe("#1E1E1E");
    });

    it("has correct text colors for dark mode", () => {
      const theme = getTheme("dark");
      expect(theme.palette.text.primary).toBe("#E2E8F0");
      expect(theme.palette.text.secondary).toBe("#94A3B8");
      expect(theme.palette.text.disabled).toBe("#64748B");
    });

    it("has lightened primary colors for dark mode", () => {
      const theme = getTheme("dark");
      expect(theme.palette.primary.main).toBe("#5a8574");
      expect(theme.palette.primary.light).toBe("#9bc4b3");
      expect(theme.palette.primary.dark).toBe("#4a6d5f");
    });

    it("has lightened secondary colors for dark mode", () => {
      const theme = getTheme("dark");
      expect(theme.palette.secondary.main).toBe("#F4A99C");
    });

    it("has lightened success colors for dark mode", () => {
      const theme = getTheme("dark");
      expect(theme.palette.success.main).toBe("#34D399");
    });

    it("has lightened info colors for dark mode", () => {
      const theme = getTheme("dark");
      expect(theme.palette.info.main).toBe("#60A5FA");
    });

    it("uses darker shadows", () => {
      const theme = getTheme("dark");
      expect(theme.shadows[1]).toBe("0px 1px 2px rgba(0, 0, 0, 0.3)");
    });
  });

  describe("common properties", () => {
    it("has consistent typography settings", () => {
      const lightTheme = getTheme("light");
      const darkTheme = getTheme("dark");

      expect(lightTheme.typography.button.textTransform).toBe("none");
      expect(darkTheme.typography.button.textTransform).toBe("none");
      expect(lightTheme.typography.h1.fontWeight).toBe(600);
      expect(darkTheme.typography.h1.fontWeight).toBe(600);
    });

    it("has consistent shape settings", () => {
      const lightTheme = getTheme("light");
      const darkTheme = getTheme("dark");

      expect(lightTheme.shape.borderRadius).toBe(8);
      expect(darkTheme.shape.borderRadius).toBe(8);
    });

    it("has consistent error colors", () => {
      const lightTheme = getTheme("light");
      const darkTheme = getTheme("dark");

      expect(lightTheme.palette.error.main).toBe("#DC2626");
      expect(darkTheme.palette.error.main).toBe("#DC2626");
    });

    it("has consistent warning colors", () => {
      const lightTheme = getTheme("light");
      const darkTheme = getTheme("dark");

      expect(lightTheme.palette.warning.main).toBe("#F59E0B");
      expect(darkTheme.palette.warning.main).toBe("#F59E0B");
    });
  });
});
