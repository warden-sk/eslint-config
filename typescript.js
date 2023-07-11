/*
 * Copyright 2023 Marek Kobida
 */

const typescript = {
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/array-type.ts
  '@typescript-eslint/array-type': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/await-thenable.ts
  '@typescript-eslint/await-thenable': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-type-assertions.ts
  '@typescript-eslint/consistent-type-assertions': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-type-definitions.ts
  '@typescript-eslint/consistent-type-definitions': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-type-exports.ts
  '@typescript-eslint/consistent-type-exports': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-type-imports.ts
  '@typescript-eslint/consistent-type-imports': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/explicit-function-return-type.ts
  '@typescript-eslint/explicit-function-return-type': [1, { allowExpressions: true }],
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/no-explicit-any.ts
  '@typescript-eslint/no-explicit-any': 1,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/no-inferrable-types.ts
  '@typescript-eslint/no-inferrable-types': 1,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/no-unnecessary-condition.ts
  '@typescript-eslint/no-unnecessary-condition': 0,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/promise-function-async.ts
  '@typescript-eslint/promise-function-async': 1,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/return-await.ts
  '@typescript-eslint/return-await': [1, 'always'],
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/sort-type-constituents.ts
  '@typescript-eslint/sort-type-constituents': 2,
  // https://github.com/eslint/eslint/blob/master/lib/rules/no-return-await.js
  'no-return-await': 0,
};

module.exports = typescript;
