module.exports = {
  plugins: [
    '@typescript-eslint',
    'import',
    'simple-import-sort',
    'unused-imports',
  ],
  extends: [
    // https://www.npmjs.com/package/eslint-config-airbnb-typescript
    'airbnb-typescript/base',

    // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',

    /**
     * Make sure to put prettier last, so it gets the chance to override other
     * configs.
     *
     * @see https://github.com/prettier/eslint-config-prettier
     */
    'prettier',
  ],
}
