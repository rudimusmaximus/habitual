/** @type { import("eslint").Linter.Config } */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'prettier',
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
    // severity Codes: (0 = off, 1 = warn, 2 = error )
    'camelcase': 1,
    'require-jsdoc': 1,
    'prefer-const': 1,
    'ignoreReadBeforeAssign': 0,
    'jsdoc/require-returns': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 2,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1,
    'valid-jsdoc': 1,
    'object-curly-spacing': [2, 'never'], // internal spacing
    // Modernized rules for line lengths should be between 100 and 120 rather than 80;
    // Provides flexibility for URLs, strings, and regular expressions
    'max-len': [
      'error',
      {
        code: 111,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // TODO verify these still match the tailwindcss/recommended edit if needed
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
