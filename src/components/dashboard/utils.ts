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

  const fields = Object.keys(rows[0]);
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
  const humanize = keyName;
  return humanize;
}

// const columns: GridColDef[] = [
//   {
//     field: "patientId",
//     headerName: "Patient ID",
//     width: Math.max(
//       computeTextWidth("Patient ID") + 32, // header
//       ...rows.map((r) => computeTextWidth(r.patientFirstName) + 32), // padding
//     ),
//   },

export { computeTextWidth, createColumns };
