module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["simple-import-sort"],
  rules: {},
  rules: {
    // increase the severity of rules so they are auto-fixable
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
