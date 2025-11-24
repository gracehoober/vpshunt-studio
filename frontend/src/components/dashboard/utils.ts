import type { Rows } from "./types";

import type { GridColDef } from "@mui/x-data-grid";

function computeTextWidth(text: string, font = "14px Roboto"): number {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  context.font = font;
  return context.measureText(text).width + 32;
}

function createColumns(rows: Rows): GridColDef[] {
  if (!rows.length) return [];

  const fields = Object.keys(rows[0]).filter((f) => f !== "id");
  return fields.map((fieldName) => {
    const field = fieldName;
    const headerName = humanizeColHeader(fieldName);
    const width = computeTextWidth(headerName);
    const base: GridColDef = {
      field,
      headerName,
      width,
    };
    return base;
  });
}

function humanizeColHeader(keyName: string): string {
  const humanize = keyName
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
  return humanize;
}

export { computeTextWidth, createColumns };
