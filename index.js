/*
 * Copyright 2021 Marek Kobida
 */

const typescript = {
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/rules/array-type.ts
  '@typescript-eslint/array-type': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/rules/consistent-type-definitions.ts
  '@typescript-eslint/consistent-type-definitions': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/rules/no-explicit-any.ts
  '@typescript-eslint/no-explicit-any': 1,
};

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'arrow-body-style': 0,
    eqeqeq: 2,
    'prefer-arrow-callback': 0,
    'prettier/prettier': [
      2,
      {
        arrowParens: 'avoid',
        printWidth: 120,
        singleQuote: true,
      },
    ],
    // https://github.com/eslint/eslint/blob/master/lib/rules/sort-imports.js
    'sort-imports': 2,
    ...typescript,
  },
};
