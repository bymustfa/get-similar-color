Get Similar Color
=================

[![npm version](https://img.shields.io/npm/v/get-similar-color.svg?style=flat-square)](https://www.npmjs.com/package/get-similar-color)[![npm downloads](https://img.shields.io/npm/dm/get-similar-color.svg?style=flat-square) ](https://npm-stat.com/charts.html?package=get-similar-color)[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=get-similar-color&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=get-similar-color)

**Get Similar Color** is a TypeScript/JavaScript library that provides utility functions for finding a similar color within a color palette. You can easily use it in either a frontend project or a backend project. This library can assist you in quickly locating colors that closely match a target color.

Installation
------------

You can install the package using npm or yarn:
```bash
$ npm install get-similar-color
```

```bash
$ yarn add get-similar-color
```


Usage
-----

Here's how you can use the **Get Similar Color** library in your TypeScript/JavaScript project:

### JavaScript Example

    const getSimilarColor = require("get-similar-color").default;
    
    const defaultColorArray = [
      { name: "red", hex: "#ff0000" },
      { name: "green", hex: "#00ff00" },
      { name: "blue", rgb: { r: 0, g: 0, b: 255 } },
      { name: "yellow", hex: "#ffff00" },
      { name: "purple", rgb: { r: 128, g: 0, b: 128 } },
      { name: "orange", hex: "#ffa500" },
    ];
    
    const findColor = getSimilarColor({
      targetColor: "#e30b0b",
      colorArray: defaultColorArray,
      similarityThreshold: 0.5,
    });
    
    console.log(findColor);


### TypeScript Example

    import getSimilarColor, { IDefaultColor } from "get-similar-color";
    
    const defaultColorArray: IDefaultColor[] = [
      { name: "red", hex: "#ff0000" },
      { name: "green", hex: "#00ff00" },
      { name: "blue", rgb: { r: 0, g: 0, b: 255 } },
      { name: "yellow", hex: "#ffff00" },
      { name: "purple", rgb: { r: 128, g: 0, b: 128 } },
      { name: "orange", hex: "#ffa500" },
    ];
    
    const findColor = getSimilarColor({
      targetColor: "#e30b0b",
      colorArray: defaultColorArray,
      similarityThreshold: 0.5,
    });
    
    console.log(findColor);


### Console Output

The output will be either `null` or an object representing the most similar color:

    {
      name: "red",
      hex: "#ff0000",
      rgb: {
        r: 255,
        g: 0,
        b: 0
      },
      similarity: 0.93
    }


Features
--------

*   **getSimilarColor:** Find a similar color from an array based on a target color and a similarity threshold.
*   **IDefaultColor:** Interface for default color array.
*   **Support for Multiple Color Formats:** HEX, RGB, HSL, and HSV formats.
*   **Advanced Similarity Calculation:** Uses the CIEDE2000 algorithm for more accurate color similarity calculations.

Advanced Features
-----------------

The latest version of the **Get Similar Color** library includes several advanced features:

### Support for Multiple Color Formats

In addition to HEX and RGB, the library now supports HSL (Hue, Saturation, Lightness) and HSV (Hue, Saturation, Value) color formats. This allows you to input and compare colors in a variety of formats.

#### HSL Example

    const findColor = getSimilarColor({
      targetColor: { h: 240, s: 100, l: 50 },
      colorArray: defaultColorArray,
      similarityThreshold: 0.5,
    });
    
    console.log(findColor);


#### HSV Example

    const findColor = getSimilarColor({
      targetColor: { h: 0, s: 100, v: 100 },
      colorArray: defaultColorArray,
      similarityThreshold: 0.5,
    });
    
    console.log(findColor);


### Advanced Similarity Calculation

The library now includes an implementation of the CIEDE2000 algorithm for calculating color differences. This algorithm provides a more accurate measurement of color similarity compared to simple RGB or HEX comparisons.

Contributing
------------

Contributions are welcome! If you have any bug reports, feature requests, or would like to contribute code, please open an issue or submit a pull request.

License
-------

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](/LICENSE)

Npm
---

[![NPM](https://nodei.co/npm/get-similar-color.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/get-similar-color/)