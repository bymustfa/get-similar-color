export interface IDefaultColor {
  name: string;
  hex?: string;
  rgb?: {
    r: number;
    g: number;
    b: number;
  };
}

interface IRgbColor {
  r: number;
  g: number;
  b: number;
}

type IColor = "hex" | "rgb" | null;

function getColorType(color: string | IRgbColor): IColor {
  if (typeof color === "string") {
    if (color.startsWith("#")) {
      return "hex";
    } else {
      return null;
    }
  } else {
    if (
      typeof color.r === "number" &&
      typeof color.g === "number" &&
      typeof color.b === "number"
    ) {
      return "rgb";
    } else {
      return null;
    }
  }
}

function hexToRgb(hex: string): IRgbColor {
  const hexValue = hex.replace("#", "");
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);

  return { r, g, b };
}

function rgbToHex(rgb: { r: number; g: number; b: number }): string {
  const { r, g, b } = rgb;
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

export interface IGetSimilarColorOptions {
  targetColor: string | IRgbColor;
  colorArray: IDefaultColor[];
  // min :0.01 max: 1
  similarityThreshold?: number;
}

export interface ISimilarColor {
  name: string;
  hex: string;
  rgb: {
    r: number;
    g: number;
    b: number;
  };
  similarity: number;
}

function calculateSimilarity(
  color1: { r: number; g: number; b: number },
  color2: { r: number; g: number; b: number }
): number {
  const rDiff = Math.abs(color1.r - color2.r);
  const gDiff = Math.abs(color1.g - color2.g);
  const bDiff = Math.abs(color1.b - color2.b);

  const rSimilarity = 1 - rDiff / 255;
  const gSimilarity = 1 - gDiff / 255;
  const bSimilarity = 1 - bDiff / 255;

  return (rSimilarity + gSimilarity + bSimilarity) / 3;
}

function getSimilarColor(
  options: IGetSimilarColorOptions
): ISimilarColor | null {
  let similarityThreshold = Math.min(
    Math.max(options.similarityThreshold || 0.8, 0.01),
    1
  );

  const { targetColor, colorArray } = options;

  const targetType = getColorType(targetColor);

  if (targetType === null) {
    return null;
  }

  const targetRgb =
    targetType === "hex"
      ? hexToRgb(targetColor as string)
      : (targetColor as IRgbColor);

  let similarColor: ISimilarColor | null = null;
  let maxSimilarity = 0;

  for (const color of colorArray) {
    let colorType = getColorType(color.hex ? color.hex : color.rgb!);

    if (!color.hex) {
      color.hex = rgbToHex(color.rgb!);
    } else if (!color.rgb) {
      color.rgb = hexToRgb(color.hex!);
    }

    const similarity =
      Math.round(calculateSimilarity(targetRgb, color.rgb!) * 100) / 100;

    if (similarity >= similarityThreshold && similarity > maxSimilarity) {
      maxSimilarity = similarity;

      similarColor = {
        name: color.name,
        hex: color.hex!,
        rgb: color.rgb!,
        similarity: similarity,
      };
    }
  }

  return similarColor;
}

export default getSimilarColor;
