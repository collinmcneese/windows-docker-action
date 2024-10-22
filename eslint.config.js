import js from "@eslint/js";

export default [
  {
    ignores: ['__test__/**/*', 'dist/**/*', 'node_modules/**/*'],
    files: ['**/*.js'],
  },
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        process: 'readonly',
        require: 'readonly',
        console: 'readonly',
      }
    },
  },
  js.configs.recommended,
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
    }
  }
];