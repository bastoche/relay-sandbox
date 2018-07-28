module.exports = {
  env: {
    node: true
  },
  globals: {
    fetch: true
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended"
  ]
};
