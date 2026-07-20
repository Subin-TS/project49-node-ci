const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,

  // Application files
  {
    files: ["**/*.js"],
    ignores: ["tests/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        module: "readonly",
        require: "readonly",
        process: "readonly"
      }
    }
  },

  // Jest test files
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        test: "readonly",
        expect: "readonly",
        require: "readonly"
      }
    }
  }
];