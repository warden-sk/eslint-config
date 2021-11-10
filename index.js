/*
 * Copyright 2021 Marek Kobida
 */

const prettier = {
  // https://github.com/eslint/eslint/blob/master/lib/rules/arrow-body-style.js
  'arrow-body-style': 0,
  // https://github.com/eslint/eslint/blob/master/lib/rules/prefer-arrow-callback.js
  'prefer-arrow-callback': 0,
  'prettier/prettier': [
    2,
    {
      arrowParens: 'avoid',
      printWidth: 120,
      singleQuote: true,
    },
  ],
};

const typescript = {
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/rules/array-type.ts
  '@typescript-eslint/array-type': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/rules/consistent-type-assertion.ts
  '@typescript-eslint/consistent-type-assertions': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/rules/consistent-type-definitions.ts
  '@typescript-eslint/consistent-type-definitions': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/rules/member-ordering.ts
  '@typescript-eslint/member-ordering': [2, { default: { order: 'alphabetically' } }],
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/rules/no-explicit-any.ts
  '@typescript-eslint/no-explicit-any': 1,
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/rules/no-inferrable-types.ts
  '@typescript-eslint/no-inferrable-types': 1,
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/rules/sort-type-union-intersection-members.ts
  '@typescript-eslint/sort-type-union-intersection-members': 2,
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
    // https://github.com/eslint/eslint/blob/master/lib/rules/eqeqeq.js
    eqeqeq: 2,
    // https://github.com/eslint/eslint/blob/master/lib/rules/prefer-const.js
    'prefer-const': 2,
    // https://github.com/eslint/eslint/blob/master/lib/rules/sort-imports.js
    'sort-imports': 2,
    ...prettier,
    ...typescript,
  },
};
