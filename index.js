/*
 * Copyright 2024 Marek Kobida
 * Last Updated: 24.01.2024 at 23:11
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
    ecmaVersion: 2024,
    project: true,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  rules: {
    eqeqeq: 2,
    // 'prefer-const': 2,
    quotes: [2, 'single'],
    'sort-keys': 2,
    ...prettier,
    ...react,
    ...typescript,
  },
};
