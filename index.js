/*
 * Copyright 2023 Marek Kobida
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

const react = {
  'react/destructuring-assignment': 2,
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/lib/rules/jsx-key.js
  'react/jsx-key': 2,
  'react/jsx-no-useless-fragment': 2,
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/lib/rules/jsx-sort-props.js
  'react/jsx-sort-props': 2,
  'react/no-array-index-key': 2,
  'react/no-multi-comp': 2,
};

const typescript = {
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/array-type.ts
  '@typescript-eslint/array-type': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-type-assertions.ts
  '@typescript-eslint/consistent-type-assertions': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-type-definitions.ts
  '@typescript-eslint/consistent-type-definitions': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-type-imports.ts
  '@typescript-eslint/consistent-type-imports': 2,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/no-explicit-any.ts
  '@typescript-eslint/no-explicit-any': 1,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/no-inferrable-types.ts
  '@typescript-eslint/no-inferrable-types': 1,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/no-unnecessary-condition.ts
  '@typescript-eslint/no-unnecessary-condition': 1,
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/sort-type-constituents.ts
  '@typescript-eslint/sort-type-constituents': 2,
};

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  rules: {
    // https://github.com/eslint/eslint/blob/master/lib/rules/eqeqeq.js
    eqeqeq: 2,
    // https://github.com/eslint/eslint/blob/master/lib/rules/prefer-const.js
    'prefer-const': 2,
    'react-hooks/rules-of-hooks': 2,
    'sort-keys': 2,
    ...prettier,
    ...react,
    ...typescript,
  },
};
