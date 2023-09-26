/*
 * Copyright 2023 Marek Kobida
 */

const prettier = require('./prettier');
const react = require('./react');
const typescript = require('./typescript');

module.exports = {
  extends: ['plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2023,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  rules: {
    eqeqeq: 2,
    'prefer-const': 2,
    'sort-keys': 2,
    ...prettier,
    ...react,
    ...typescript,
  },
};
