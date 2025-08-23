function computeTextWidth(text: string, font = "14px Roboto"): number {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  context.font = font;
  return context.measureText(text).width;
}

export { computeTextWidth };
