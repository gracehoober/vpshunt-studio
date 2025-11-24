import { describe, expect, it, beforeEach } from "vitest";
import { computeTextWidth, createColumns } from "./utils";

describe("dashboard utils", () => {
  describe("computeTextWidth", () => {
    beforeEach(() => {
      // Mock canvas context
      HTMLCanvasElement.prototype.getContext = function () {
        return {
          measureText: (text: string) => ({ width: text.length * 10 }),
          font: "",
        } as any;
      };
    });

    it("computes text width with default font", () => {
      const width = computeTextWidth("Hello");
      expect(width).toBeGreaterThan(0);
      // Should be text width + 32 padding
      expect(width).toBe(50 + 32); // "Hello" = 5 chars * 10 + 32
    });

    it("computes text width with custom font", () => {
      const width = computeTextWidth("Test", "16px Arial");
      expect(width).toBeGreaterThan(0);
      expect(width).toBe(40 + 32); // "Test" = 4 chars * 10 + 32
    });

    it("handles empty string", () => {
      const width = computeTextWidth("");
      expect(width).toBe(32); // Just padding
    });

    it("handles long text", () => {
      const longText = "This is a very long header text";
      const width = computeTextWidth(longText);
      expect(width).toBe(longText.length * 10 + 32);
    });
  });

  describe("createColumns", () => {
    it("creates columns from row data", () => {
      const rows: any = [
        {
          id: "1",
          patientFirstName: "John",
          patientLastName: "Doe",
          patientDOB: new Date("1990-01-01"),
          patientId: "P123",
        },
      ];

      const columns = createColumns(rows);

      expect(columns).toHaveLength(4); // excludes 'id'
      expect(columns.some((col) => col.field === "patientFirstName")).toBe(true);
      expect(columns.some((col) => col.field === "patientLastName")).toBe(true);
      expect(columns.some((col) => col.field === "patientDOB")).toBe(true);
      expect(columns.some((col) => col.field === "patientId")).toBe(true);
    });

    it("returns empty array for empty rows", () => {
      const columns = createColumns([]);
      expect(columns).toEqual([]);
    });

    it("excludes id field from columns", () => {
      const rows: any = [
        {
          id: "1",
          patientFirstName: "John",
          patientLastName: "Doe",
        },
      ];

      const columns = createColumns(rows);
      const hasIdColumn = columns.some((col) => col.field === "id");

      expect(hasIdColumn).toBe(false);
    });

    it("humanizes column headers", () => {
      const rows: any = [
        {
          id: "1",
          patientFirstName: "John",
          patientLastName: "Doe",
          patientDOB: new Date("1990-01-01"),
        },
      ];

      const columns = createColumns(rows);
      const firstNameCol = columns.find((col) => col.field === "patientFirstName");
      const lastNameCol = columns.find((col) => col.field === "patientLastName");
      const dobCol = columns.find((col) => col.field === "patientDOB");

      expect(firstNameCol?.headerName).toBe("Patient First Name");
      expect(lastNameCol?.headerName).toBe("Patient Last Name");
      expect(dobCol?.headerName).toBe("Patient D O B");
    });

    it("sets width based on header text", () => {
      const rows: any = [
        {
          id: "1",
          patientFirstName: "John",
        },
      ];

      const columns = createColumns(rows);

      expect(columns[0].width).toBeGreaterThan(0);
      // "Patient First Name" = 18 chars * 10 + 32 = 212
      expect(columns[0].width).toBe(212);
    });

    it("handles multiple rows", () => {
      const rows: any = [
        {
          id: "1",
          patientFirstName: "John",
          patientLastName: "Doe",
        },
        {
          id: "2",
          patientFirstName: "Jane",
          patientLastName: "Smith",
        },
      ];

      const columns = createColumns(rows);

      // Should create columns based on first row
      expect(columns).toHaveLength(2);
      expect(columns.some((col) => col.field === "patientFirstName")).toBe(true);
      expect(columns.some((col) => col.field === "patientLastName")).toBe(true);
    });

    it("handles single character field names", () => {
      const rows: any = [
        {
          id: "1",
          a: "value",
        },
      ];

      const columns = createColumns(rows);

      expect(columns[0].headerName).toBe("A");
    });

    it("handles camelCase with multiple capitals", () => {
      const rows: any = [
        {
          id: "1",
          patientDOB: new Date("1990-01-01"),
        },
      ];

      const columns = createColumns(rows);

      expect(columns[0].headerName).toBe("Patient D O B");
    });
  });
});
