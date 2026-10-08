const js = require("@eslint/js");

module.exports = [
  {
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        document: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
  },
];
