/*
 * Copyright 2024 Marek Kobida
 * Last Updated: 22.07.2024
 */

import $perfectionist from 'eslint-plugin-perfectionist';
import $prettier from 'eslint-plugin-prettier';
import $react from 'eslint-plugin-react';
import $ts from 'typescript-eslint';

import prettier from './prettier.js';
import react from './react.js';
import typescript from './typescript.js';

export default [
  $perfectionist.configs['recommended-alphabetical'],
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      parser: $ts.parser,
      // https://typescript-eslint.io/packages/parser
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': $ts.plugin,
      react: $react,
      prettier: $prettier, // LAST
    },
    rules: {
      eqeqeq: 2,
      'no-restricted-globals': [
        1,
        {
          message: 'Use `window.clearInterval`.',
          name: 'clearInterval',
        },
        {
          message: 'Use `window.clearTimeout`.',
          name: 'clearTimeout',
        },
        {
          message: 'Use `window.console`.',
          name: 'console',
        },
        {
          message: 'Use `window.document`.',
          name: 'document',
        },
        {
          message: 'Use `window.history`.',
          name: 'history',
        },
        {
          message: 'Use `window.localStorage`.',
          name: 'localStorage',
        },
        {
          message: 'Use `window.location`.',
          name: 'location',
        },
        {
          message: 'Use `window.navigator`.',
          name: 'navigator',
        },
        {
          message: 'Use `window.open`.',
          name: 'open',
        },
        {
          message: 'Use `window.sessionStorage`.',
          name: 'sessionStorage',
        },
        {
          message: 'Use `window.setInterval`.',
          name: 'setInterval',
        },
        {
          message: 'Use `window.setTimeout`.',
          name: 'setTimeout',
        },
      ],
      quotes: [2, 'single'],
      ...prettier,
      ...react,
      ...typescript,
    },
  },
];
