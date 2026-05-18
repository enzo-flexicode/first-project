import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      eqeqeq: "error",
      "no-unused-vars": "error",
      "no-console": "error"
    }
  }
];
