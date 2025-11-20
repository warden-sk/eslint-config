/*
 * Copyright 2025 Marek Kobida
 */

const typescript = {
  // `Array<T>` or `T[]`
  '@typescript-eslint/array-type': 2,
  '@typescript-eslint/await-thenable': 2,
  '@typescript-eslint/consistent-generic-constructors': 2,
  // `Record<string, unknown>` or `{ [key: string]: unknown }`
  '@typescript-eslint/consistent-indexed-object-style': 2,
  '@typescript-eslint/consistent-type-assertions': 2,
  // `interface` or `type`
  '@typescript-eslint/consistent-type-definitions': [2, 'type'],
  // `export type`
  '@typescript-eslint/consistent-type-exports': 2,
  // `import type`
  '@typescript-eslint/consistent-type-imports': 2,
  '@typescript-eslint/dot-notation': 2,
  '@typescript-eslint/explicit-function-return-type': [
    1,
    {
      allowExpressions: true,
    },
  ],
  '@typescript-eslint/no-confusing-non-null-assertion': 2,
  '@typescript-eslint/no-floating-promises': 1,
  '@typescript-eslint/no-inferrable-types': 2,
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
  '@typescript-eslint/no-unnecessary-condition': 2,
  '@typescript-eslint/no-unnecessary-parameter-property-assignment': 2,
  '@typescript-eslint/no-unnecessary-qualifier': 2,
  '@typescript-eslint/no-unnecessary-template-expression': 2,
  '@typescript-eslint/no-unnecessary-type-arguments': 2,
  '@typescript-eslint/no-unnecessary-type-assertion': 2,
  '@typescript-eslint/no-unnecessary-type-constraint': 2,
  '@typescript-eslint/no-unnecessary-type-conversion': 2,
  '@typescript-eslint/no-unnecessary-type-parameters': 2,
  '@typescript-eslint/prefer-function-type': 2,
  // `??`
  '@typescript-eslint/prefer-nullish-coalescing': 2,
  // `?.`
  '@typescript-eslint/prefer-optional-chain': 2,
  '@typescript-eslint/promise-function-async': 1,
  '@typescript-eslint/return-await': 1,
  'dot-notation': 0,
};

export default typescript;
