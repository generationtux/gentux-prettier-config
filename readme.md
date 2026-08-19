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

## Release

Bump the version in `package.json` and merge to `master`. CI publishes to npm via
trusted publishing (OIDC) — there is no token to log in with, and publishing from
a laptop will not work.

## Changelog

### 3.0.1

- Publish via npm trusted publishing (OIDC) instead of a stored token
- Bumped CI to Node 24

### 3.0.0
- Changed `trailingComma` from `es5` to `all`
- Added `peerDependencies` requiring Prettier >= 3.0.0
- Added package metadata (repository, keywords, etc.)

### 2.0.0
- Updated `printWidth` from 80 to 140
- Upgraded Prettier compatibility

### 1.0.0
- Initial release with TypeScript parser support
- Single quotes enabled
