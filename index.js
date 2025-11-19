/*
 * Copyright 2025 Marek Kobida
 */

import $js from '@eslint/js';
import $perfectionist from 'eslint-plugin-perfectionist';
import $prettier from 'eslint-plugin-prettier';
import $ts from 'typescript-eslint';

import prettier from './prettier.js';
import typescript from './typescript.js';

export default [
  $js.configs.recommended,
  $perfectionist.configs['recommended-alphabetical'],
  $ts.configs.recommended,
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
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
    },
    plugins: {
      '@typescript-eslint': $ts.plugin,
      prettier: $prettier, // LAST
    },
    rules: {
      // https://eslint.org/docs/latest/rules/eqeqeq
      eqeqeq: 2,
      // https://eslint.org/docs/latest/rules/no-useless-return
      'no-useless-return': 2,
      // https://eslint.org/docs/latest/rules/object-shorthand
      'object-shorthand': 2,
      ...prettier,
      ...typescript,
    },
  },
];
