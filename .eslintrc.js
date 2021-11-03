module.exports = {
  root: true,
  plugins: ["import-newlines"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "@vue/typescript/recommended",
    // '.eslintrc.accessibility.js',
  ],
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
      },
    },
  ],
  rules: {
    semi: [2, "never"],
    "vue/attribute-hyphenation": "off",
    "vue/require-default-prop": "off",
    "no-import-assign": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    quotes: [2, "single"],
    indent: "off",
    "@typescript-eslint/indent": [2, 2],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
          requireLast: true,
        },
      },
    ],
    "object-curly-spacing": [1, "always"],
    "import-newlines/enforce": [
      "error",
      {
        items: 2,
      },
    ],
    "space-before-blocks": [1, "always"],
  },
};
