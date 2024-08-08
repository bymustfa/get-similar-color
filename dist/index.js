"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getColorType(color) {
    if (typeof color === "string") {
        if (color.startsWith("#")) {
            return "hex";
        }
        else {
            return null;
        }
    }
    else if ("r" in color && "g" in color && "b" in color) {
        return "rgb";
    }
    else if ("h" in color && "s" in color && "l" in color) {
        return "hsl";
    }
    else if ("h" in color && "s" in color && "v" in color) {
        return "hsv";
    }
    else {
        return null;
    }
}
function hexToRgb(hex) {
    const hexValue = hex.replace("#", "");
    const r = parseInt(hexValue.substring(0, 2), 16);
    const g = parseInt(hexValue.substring(2, 4), 16);
    const b = parseInt(hexValue.substring(4, 6), 16);
    return { r, g, b };
}
function rgbToHex(rgb) {
    const { r, g, b } = rgb;
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return {
        r: Math.round(f(0) * 255),
        g: Math.round(f(8) * 255),
        b: Math.round(f(4) * 255),
    };
}
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h *= 60;
    }
    return { h, s: s * 100, l: l * 100 };
}
function hsvToRgb(h, s, v) {
    s /= 100;
    v /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => v - v * s * Math.max(0, Math.min(k(n), 4 - k(n), 1));
    return {
        r: Math.round(f(5) * 255),
        g: Math.round(f(3) * 255),
        b: Math.round(f(1) * 255),
    };
}
function rgbToHsv(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const d = max - min;
    const s = max === 0 ? 0 : d / max;
    const v = max;
    let h = 0;
    if (max !== min) {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h *= 60;
    }
    return { h, s: s * 100, v: v * 100 };
}
function calculateSimilarity(color1, color2) {
    const rDiff = Math.abs(color1.r - color2.r);
    const gDiff = Math.abs(color1.g - color2.g);
    const bDiff = Math.abs(color1.b - color2.b);
    const rSimilarity = 1 - rDiff / 255;
    const gSimilarity = 1 - gDiff / 255;
    const bSimilarity = 1 - bDiff / 255;
    return (rSimilarity + gSimilarity + bSimilarity) / 3;
}
function ciede2000(color1, color2) {
    return calculateSimilarity(color1, color2);
}
function getSimilarColor(options) {
    let similarityThreshold = Math.min(Math.max(options.similarityThreshold || 0.8, 0.01), 1);
    const { targetColor, colorArray } = options;
    const targetType = getColorType(targetColor);
    if (targetType === null) {
        return null;
    }
    let targetRgb;
    if (targetType === "hex") {
        targetRgb = hexToRgb(targetColor);
    }
    else if (targetType === "rgb") {
        targetRgb = targetColor;
    }
    else if (targetType === "hsl") {
        const { h, s, l } = targetColor;
        targetRgb = hslToRgb(h, s, l);
    }
    else if (targetType === "hsv") {
        const { h, s, v } = targetColor;
        targetRgb = hsvToRgb(h, s, v);
    }
    else {
        return null;
    }
    let similarColor = null;
    let maxSimilarity = 0;
    for (const color of colorArray) {
        let colorType = getColorType(color.hex ? color.hex : color.rgb);
        if (!color.hex) {
            color.hex = rgbToHex(color.rgb);
        }
        else if (!color.rgb) {
            color.rgb = hexToRgb(color.hex);
        }
        const similarity = Math.round(calculateSimilarity(targetRgb, color.rgb) * 100) / 100;
        if (similarity >= similarityThreshold && similarity > maxSimilarity) {
            maxSimilarity = similarity;
            similarColor = {
                name: color.name,
                hex: color.hex,
                rgb: color.rgb,
                similarity: similarity,
            };
        }
    }
    return similarColor;
}
exports.default = getSimilarColor;
