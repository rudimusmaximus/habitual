/** @type { import("eslint").Linter.Config } */
module.exports = {
  root: true,
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'google',
    'plugin:tailwindcss/recommended',
    'plugin:svelte/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  plugins: ['jsdoc', 'tailwindcss'],
  rules: {
    // severityCodes: (0 = off, 1 = warn, 2 = error )
    'prefer-const': 1,
    'ignoreReadBeforeAssign': 0,
    'jsdoc/require-returns': 0,
    'object-curly-spacing': [2, 'never'], // internal spacing

    // RCM modernized rules for line lengths should be between 100 and 120 rather than 80;
    // Provides flexibility for URLs, strings, and regular expressions
    'max-len': [
      'error',
      {
        code: 93,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // these should match the tailwindcss/recommended edit if needed
    'tailwindcss/classnames-order': 1,
    'tailwindcss/enforces-negative-arbitrary-values': 1,
    'tailwindcss/enforces-shorthand': 1,
    'tailwindcss/migration-from-tailwind-2': 1,
    'tailwindcss/no-arbitrary-value': 0,
    'tailwindcss/no-custom-classname': 1,
    'tailwindcss/no-contradicting-classname': 2,
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: 'return',
      },
    },
  },
};
