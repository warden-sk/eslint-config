/*
 * Copyright 2023 Marek Kobida
 */

const prettier = require('./prettier');
const react = require('./react');
const typescript = require('./typescript');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2023,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  rules: {
    // https://github.com/eslint/eslint/blob/master/lib/rules/eqeqeq.js
    eqeqeq: 2,
    // https://github.com/eslint/eslint/blob/master/lib/rules/prefer-const.js
    'prefer-const': 2,
    'sort-keys': 2,
    ...prettier,
    ...react,
    ...typescript,
  },
};
