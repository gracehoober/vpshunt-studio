function computeTextWidth(text: string, font = "14px Roboto"): number {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  context.font = font;
  return context.measureText(text).width;
}

function computeColumnWidth(header:string, rows):number {
  return Math.max(
    computeTextWidth(header) + 32, // header
    ...rows.map((r) => computeTextWidth(r[header] + 32), // padding
  ),

};

export { computeTextWidth, computeColumnWidth };
