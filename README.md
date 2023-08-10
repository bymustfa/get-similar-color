Get Similar Color
=================


[![npm version](https://img.shields.io/npm/v/get-similar-color.svg?style=flat-square)](https://www.npmjs.com/package/get-similar-color)
[![npm downloads](https://img.shields.io/npm/dm/get-similar-color.svg?style=flat-square)](https://npm-stat.com/charts.html?package=get-similar-color)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=get-similar-color&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=get-similar-color)

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

Javascript Example:
```js
const getSimilarColor = require("get-similar-color").default

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
    // min :0.01 max: 1 not required default 0.8
    similarityThreshold: 0.5,
});
```

TypeScript Example:
```ts
import getSimilarColor, {IDefaultColor} from "get-similar-color";

const defaultColorArray: IDefaultColor[] = [
        { name: "red", hex: "#ff0000" },
        { name: "green", hex: "#00ff00" },
        { name: "blue", rgb: { r: 0, g: 0, b: 255 } },
        { name: "yellow", hex: "#ffff00" },
        { name: "purple", rgb: { r: 128, g: 0, b: 128 } },
        { name: "orange", hex: "#ffa500" },
    ];
// renturn type ISimilarColor | null 
const findColor = getSimilarColor({
    targetColor: "#e30b0b",
    colorArray: defaultColorArray,
    // min :0.01 max: 1 not required default 0.8
    similarityThreshold: 0.5,
});
```

Console output null or object:
```js
{
    name: "red",
        hex: "#ff0000",
        rgb: {
        r: 255,
            g: 0,
            b: 0
    },
    similarity: 1
}
```


Features
--------
*   **getSimilarColor:** Find a similar color from an array based on a target color and a similarity threshold.
*   **IDefaultColor:** Interface for default color array.


Contributing
------------

Contributions are welcome! If you have any bug reports, feature requests, or would like to contribute code, please open an issue or submit a pull request.

License
-------

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](/LICENSE)


Npm
---

[![NPM](https://nodei.co/npm/get-similar-color.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/get-similar-color/)
