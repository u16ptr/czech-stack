import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  ...eslintPluginAstro.configs.recommended,
  eslintPluginPrettier,
  eslintConfigPrettier,
  {
    rules: {},
  },
];
