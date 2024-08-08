import getSimilarColor, { IDefaultColor } from "../src/index";

describe("getSimilarColor", () => {
  const colorArray: IDefaultColor[] = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
  ];

  test("should find the most similar color for a given HEX color", () => {
    const options = {
      targetColor: "#FF0000",
      colorArray,
    };
    const result = getSimilarColor(options);
    expect(result).toEqual({
      name: "Red",
      hex: "#FF0000",
      rgb: { r: 255, g: 0, b: 0 },
      similarity: 1,
    });
  });

  test("should find the most similar color for a given RGB color", () => {
    const options = {
      targetColor: { r: 0, g: 255, b: 0 },
      colorArray,
    };
    const result = getSimilarColor(options);
    expect(result).toEqual({
      name: "Green",
      hex: "#00FF00",
      rgb: { r: 0, g: 255, b: 0 },
      similarity: 1,
    });
  });

  test("should find the most similar color for a given HSL color", () => {
    const options = {
      targetColor: { h: 240, s: 100, l: 50 },
      colorArray,
    };
    const result = getSimilarColor(options);
    expect(result).toEqual({
      name: "Blue",
      hex: "#0000FF",
      rgb: { r: 0, g: 0, b: 255 },
      similarity: 1,
    });
  });

  test("should find the most similar color for a given HSV color", () => {
    const options = {
      targetColor: { h: 0, s: 100, v: 100 },
      colorArray,
    };
    const result = getSimilarColor(options);
    expect(result).toEqual({
      name: "Red",
      hex: "#FF0000",
      rgb: { r: 255, g: 0, b: 0 },
      similarity: 1,
    });
  });
});
