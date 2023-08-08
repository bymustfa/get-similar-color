Get Similar Color

Get Similar Color
=================

**Get Similar Color** is a TypeScript/JavaScript library that provides utility functions for finding a similar color within a color palette. You can easily use it in either a frontend project or a backend project. This library can assist you in quickly locating colors that closely match a target color.

Installation
------------

You can install the package using npm or yarn:

    npm install get-similar-color

    yarn add get-similar-color

Usage
-----

Here's how you can use the **Get Similar Color** library in your TypeScript/JavaScript project:

Javascript Example:
```js
const getSimilarColor = require("get-similar-color");

const defaultColorArray = [
  { name: "red", hex: "#ff0000" },
  { name: "green", hex: "#00ff00" },
  { name: "blue", rgb: { r: 0, g: 0, b: 255 } },
  { name: "yellow", hex: "#ffff00" },
  { name: "purple", rgb: { r: 128, g: 0, b: 128 } },
  { name: "orange", hex: "#ffa500" },
];

const findColor = getSimilarColor({
    targetColor: "#ff0000",
    colorArray: defaultColorArray,
    // min :0.01 max: 1 not required
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

const findColor = getSimilarColor({
    targetColor: "#ff0000",
    colorArray: defaultColorArray,
    // min :0.01 max: 1 not required
    similarityThreshold: 0.5,
});
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

This project is licensed under the [MIT License](/LICENSE).
