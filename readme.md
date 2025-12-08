# @generationtux/prettier-config

Prettier config file for Generation Tux projects.

## Requirements

- Node.js >= 18.18.0
- Prettier >= 3.0.0

## Installation

```bash
npm install -D @generationtux/prettier-config
```

## Usage

Create a `.prettierrc.js` file in your project root:

```javascript
module.exports = require('@generationtux/prettier-config');
```

Or add to your `package.json`:

```json
{
  "prettier": "@generationtux/prettier-config"
}
```

## Configuration

This config includes the following Prettier options:

- Arrow parentheses: `always`
- End of line: `lf`
- JSX single quotes: `false`
- Parser: `typescript`
- Print width: `140`
- Semicolons: `true`
- Single quotes: `true`
- Tab width: `2`
- Trailing comma: `all`
- Use tabs: `false`

## Extending

To extend or override options:

```javascript
module.exports = {
  ...require('@generationtux/prettier-config'),
  printWidth: 100,
};
```
