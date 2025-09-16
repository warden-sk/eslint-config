/*
 * Copyright 2025 Marek Kobida
 * Last Updated: 19.04.2025
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
      'no-useless-return': 2,
      quotes: [2, 'single'],
      ...prettier,
      ...react,
      ...typescript,
    },
  },
];
