module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  parser: "flow",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: { parser: "typescript-eslint-parser" }
    }
  ]
};
