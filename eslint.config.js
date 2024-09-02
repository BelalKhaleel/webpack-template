import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    ignores: ["build", "coverage", "node_modules", "dist", "public"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
