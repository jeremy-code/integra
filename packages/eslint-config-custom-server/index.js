module.exports = {
  extends: ["eslint:recommended"],
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
