# @generationtux/prettier-config

Prettier config file for Generation Tux projects.

## Requirements

- Node.js >= 18.18.0
- TypeScript >= 4.8.4 (if using TypeScript)
- ESLint ^8.57.0 or ^9.0.0 (if using ESLint)

## Setup

1. Run `npm i -D @generationtux/prettier-config`
2. Copy `example/.prettierrc.js` to `.prettierrc.js` in your project

## Features

- Configured with TypeScript support using `@typescript-eslint/parser`
- Standard prettier configuration:
  - Arrow parentheses: always
  - End of line: 'lf'
  - JSX single quotes: false
  - Parser: 'typescript'
  - Print width: 140
  - Semi colons: true
  - Single quotes: true
  - Tab width: 2
  - Tabs: false
  - Trailing comma: ES5

## Example Configuration

```javascript
// .prettierrc.js
module.exports = require('@generationtux/prettier-config');
```
