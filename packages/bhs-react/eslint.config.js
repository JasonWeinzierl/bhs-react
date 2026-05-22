// @ts-check
// https://docs.expo.dev/guides/using-eslint/

const stylistic = require('@stylistic/eslint-plugin');
const expoConfig = require('eslint-config-expo/flat');
const tailwindcss = require('eslint-plugin-better-tailwindcss');
const jest = require('eslint-plugin-jest');
const jsdoc = require('eslint-plugin-jsdoc');
const packageJson = require('eslint-plugin-package-json');
const { default: perfectionist } = require('eslint-plugin-perfectionist');
const regexp = require('eslint-plugin-regexp');
const { default: unicorn } = require('eslint-plugin-unicorn');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: [
      'dist/*',
      'uniwind-types.d.ts',
    ],
  },
  {
    extends: [
      // @ts-expect-error -- types are wrong
      stylistic.configs.customize({
        quotes: 'single',
        semi: true,
        jsx: true,
        braceStyle: '1tbs',
        commaDangle: 'always-multiline',
      }),
      unicorn.configs.recommended,
      regexp.configs.recommended,
      jsdoc.configs['flat/recommended-mixed'],
    ],
    plugins: {
      perfectionist,
    },
    rules: {
      'radix': 'error',
      'no-bitwise': 'error',
      'no-throw-literal': 'error',
      'no-shadow': 'error',
      'default-param-last': 'error',

      '@stylistic/arrow-parens': 'off',
      '@stylistic/function-call-spacing': 'error',
      '@stylistic/multiline-ternary': 'off',
      '@stylistic/no-extra-semi': 'error',

      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-param': 'off',
      'jsdoc/require-param-description': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/require-returns-description': 'off',
      'jsdoc/require-yields': 'off',

      'perfectionist/sort-imports': 'warn',
      'perfectionist/sort-named-imports': 'warn',

      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-module': 'off',
    },
  },
  {
    files: [
      '**/*.{ts,tsx}',
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/promise-function-async': 'error',

      'no-unused-private-class-members': 'off',
      '@typescript-eslint/no-unused-private-class-members': 'error',

      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',

      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',
    },
  },
  {
    extends: [
      // @ts-expect-error -- types are wrong
      tailwindcss.configs.recommended,
    ],
    settings: {
      'better-tailwindcss': {
        entryPoint: './global.css',
      },
    },
    rules: {
      'better-tailwindcss/enforce-canonical-classes': 'off',
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
    },
  },
  {
    files: [
      '**/*.test.{ts,tsx}',
      '**/__tests__/**/*.{ts,tsx}',
    ],
    extends: [
      jest.configs['flat/recommended'],
    ],
    rules: {
      'jest/no-error-equal': 'error',
      'jest/no-unnecessary-assertion': 'error',
      'jest/padding-around-all': 'error',

      '@typescript-eslint/unbound-method': 'off',
      'jest/unbound-method': 'error',
    },
  },
  {
    extends: [
      packageJson.configs.recommended,
      packageJson.configs.stylistic,
    ],
  },
]);
