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

module.exports = prettier;
