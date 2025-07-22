# artiq stylize

[![npm version](https://img.shields.io/npm/v/@artiq/stylize)](https://www.npmjs.com/package/@artiq/stylize)
[![Version](https://img.shields.io/badge/Version-v1.0.0-blue)](https://www.npmjs.com/package/@artiq/stylize?activeTab=versions)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)
[![ESM](https://img.shields.io/badge/javascript-ESM-orange)](https://nodejs.org/api/esm.html)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-blue)](https://nodejs.org/)

> A terminal text stylizer with ANSI color support and modular styling system — supports chaining, style composition, proxy-based API, and multiple styling modes.

---

## ✨ Features

- 🖍️ Terminal text styling: bold, italic, underline, foreground/background color  
- 🎲 Supports `random` and `sequence` modes for applying styles  
- 🔗 Proxy-style chaining API (`stylize.bold.red('text')`)  
- 🧱 Modular design: separate functions for proxy, wrapping, resolving, parsing  
- 🧪 Style validation and text-splitting modes  
- 📁 Supports structure modes: `char`, `word`, `line`, and `sentence`  

---

## 📦 Installation

```bash
npm install @artiq/stylize
```

---

## 🚀 Usage

### Direct Styling Mode

```js
import stylize from '@artiq/stylize'

const styled = stylize('Hello Artistic!', [
  ['bold', 'red'],
  ['italic', 'blue'],
  ['underline', 'green']
], { style: 'word' });

console.log(styled);
```

```js
const output = stylize("Colorful Text!", [
  ['red', 'green', 'blue'],
  ['yellow', 'magenta']
], { style: 'char', randomize: true });

console.log(output);
```

### Using Proxy Chaining API

```js
import stylize from '@artiq/stylize'

console.log(stylize.bold.red('Bold Red'))
console.log(stylize.italic.bgGreen('Italic with Green Background'))
```

---

## 🎨 Supported Styles

- **Text styles**: `bold`, `italic`, `underline`, `dim`, `strikethrough`  
- **Foreground colors**: `red`, `blue`, `green`, `yellow`, `magenta`, etc.  
- **Background colors**: `bgRed`, `bgBlue`, `bgYellow`, etc.  
- **Bright variants**: `brightRed`, `bgBrightBlue`, etc.  
- **RGB/HEX**: `rgb(255,0,0)`, `#FF0000`, `bg#00FF00`  

---

## 📘 Quick API

### `stylize(text, styleSets, options?)`

- `text`: the string to be styled  
- `styleSets`: 2D array of style names  
- `options`: optional object `{ style: 'char'|'word'|'line'|'full', randomize: boolean }`  

### `createStylizeProxy()`

Creates a proxy-style chaining API.

### `applyStyles(text, styles[])`

Applies a specific set of styles to the text directly.

---

## 🧪 StyleSet Example

```js
const styleSets = [
  ['bold', 'red'],
  ['italic', 'blue'],
  ['underline', 'green']
];
```

---

## 👤 Author

**[Dimas Fajar](https://github.com/fajardison)**

---

## ⚖️ License

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.
