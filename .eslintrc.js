module.exports = {
  env: {
    browser: true,
    node: true
  },
  globals: {
    fetch: true
  },
  parser: "babel-eslint",
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "plugin:react/recommended"
  ]
};
