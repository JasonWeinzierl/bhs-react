// @ts-check
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import n from 'eslint-plugin-n';
import perfectionist from 'eslint-plugin-perfectionist';
import unicorn from 'eslint-plugin-unicorn';
import wdio from 'eslint-plugin-wdio';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: [
      '**/*.{js,mjs,cjs,ts,mts,cts}',
    ],
    extends: [
      js.configs.recommended,
      unicorn.configs.recommended,
      stylistic.configs['disable-legacy'],
      stylistic.configs.customize({
        quotes: 'single',
        semi: true,
        jsx: false,
        braceStyle: '1tbs',
        commaDangle: 'always-multiline',
      }),
      n.configs['flat/recommended-module'],
    ],
    plugins: {
      perfectionist,
    },
    rules: {
      '@stylistic/arrow-parens': 'off',
      '@stylistic/quote-props': [
        'error',
        'as-needed',
      ],

      'perfectionist/sort-imports': 'warn',
      'perfectionist/sort-named-imports': 'warn',

      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    files: [
      '**/*.{ts,mts,cts}',
    ],
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  }, {
    files: [
      'test/**/*.ts',
    ],
    extends: [
      // @ts-expect-error -- types are wrong
      wdio.configs['flat/recommended'],
    ],
  },
]);
